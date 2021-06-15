const mongoose = require('mongoose');
const boom = require('boom');
const pubSub = require('../../pubSub');

const {
  hostAcceptBookingById,
  updateBookingByID,
  getBookingWithUsers,
  getOverlappingBookings,
  getBookingById,
} = require('../../database/queries/bookings');

const { updateRespondingData } = require('../../database/queries/user');
const { registerNotification } = require('../../services/notifications');
const requestAcceptedToIntern = require('../../helpers/mailHelper/requestAcceptedToIntern');
const requestAcceptedToAdmin = require('../../helpers/mailHelper/requestAcceptedToAdmin');
const { scheduleReminderEmails } = require('../../services/mailing');
const { rejectBookings } = require('../../services/bookings');
const calcBursaryForBooking = require('../../helpers/calcBursaryForBooking');
const { payForCoveredBooking } = require('../payments');
const { bookingStatuses } = require('../../constants');

const acceptBooking = async (req, res, next) => {
  const { id: bookingId } = req.params;
  const { 'cancel-others': cancelOthers } = req.query;
  const { role, _id: hostId } = req.user;
  const { moneyGoTo = 'host' } = req.body;
  let session;
  try {
    // check for role
    if (role !== 'host' && role !== 'superhost') {
      return next(boom.forbidden());
    }

    // get emails data
    const bookingDetails = await getBookingWithUsers(bookingId);

    // get booking details
    const [booking] = await getBookingById(bookingId, 'intern');

    // get all overlaping requests
    const { startDate, endDate, host, intern } = bookingDetails;
    const overLappingBookings = await getOverlappingBookings({
      bookingId: mongoose.Types.ObjectId(bookingId),
      hostId,
      startDate,
      endDate,
    });

    // if overlaping cancel overlapping
    if (!cancelOthers && overLappingBookings.length) {
      return res.status(409).json({ overLappingBookings });
    }

    if (cancelOthers) {
      if (!overLappingBookings.length) return next(boom.badRequest());
      // reject others
      const rejectBookingIds = overLappingBookings.map(({ _id, status }) => {
        if (status !== 'pending') {
          throw new Error('You cannot reject accepted bookings');
        }
        return _id;
      });

      await rejectBookings(
        rejectBookingIds,
        hostId,
        'The host has accepted another booking for this time',
      );
    }

    let updatedBookingRequest;

    // if booking is free confirm booking automatically
    if (booking.price === 0) {
      updatedBookingRequest = await updateBookingByID(
        bookingId,
        'confirmed',
        true,
      );

      // send confirmed without pay booking email
      pubSub.emit(pubSub.events.booking.ACCEPTED_BY_HOST, {
        bookingId,
        intern,
        host,
        freeAutomaticAccept: true,
      });
    } else {
      // check if the booking is covered "either by bursary or by code discount"
      const {
        isBookingCovered,
        couponDiscount,
        couponDiscountDays,
        bursaryDiscount,
        coupon,
      } = await calcBursaryForBooking(bookingDetails);

      if (isBookingCovered) {
        // start a mongodb session
        session = await mongoose.startSession();
        // start transaction
        await session.startTransaction();

        await payForCoveredBooking({
          couponDiscount,
          couponDiscountDays,
          bursaryDiscount,
          bookingDetails,
          coupon,
          session,
        });

        updatedBookingRequest = await hostAcceptBookingById({
          bookingId,
          hostId,
          moneyGoTo,
          status: bookingStatuses.confirmed,
          payedAmount: bookingDetails.price,
          session,
        });

        // send confirmed booking email
        pubSub.emit(pubSub.events.booking.CONFIRMED_AFTER_PAYMENT, {
          bookingId,
          internAccount: intern,
          hostAccount: host,
        });
      } else {
        updatedBookingRequest = await hostAcceptBookingById({
          bookingId,
          hostId,
          moneyGoTo,
          status: bookingStatuses.accepted,
          payedAmount: 0,
        });

        // send accepted booking email
        pubSub.emit(pubSub.events.booking.ACCEPTED_BY_HOST, {
          bookingId,
          freeAutomaticAccept: booking.price === 0,
        });
      }
    }

    // update respondingData
    const { createdAt, confirmOrRejectDate, status } = updatedBookingRequest;

    const respondingTimeInMs = confirmOrRejectDate - createdAt;
    await updateRespondingData(hostId, respondingTimeInMs);

    let notification = [];

    if (status === 'confirmed') {
      notification = [
        // notify intern
        {
          private: false,
          user: updatedBookingRequest.intern,
          secondParty: updatedBookingRequest.host,
          type: 'stayApproved',
          booking: bookingId,
        },
        // notify host
        {
          private: false,
          user: updatedBookingRequest.host,
          secondParty: updatedBookingRequest.intern,
          type: 'stayApproved',
          booking: bookingId,
        },
      ];
    } else {
      notification = [
        // notify intern
        {
          private: false,
          user: updatedBookingRequest.intern,
          secondParty: updatedBookingRequest.host,
          type: 'stayAccepted',
          booking: bookingId,
        },
        // notify host
        {
          private: false,
          user: updatedBookingRequest.host,
          secondParty: updatedBookingRequest.intern,
          type: 'stayAccepted',
          booking: bookingId,
        },
      ];
    }

    // const allQuestions = await findAllQuestions();

    // create answers checklist for this booking
    // const answers = createBookingChecklistAnswers({
    //   questions: allQuestions,
    //   host: bookingDetails.host,
    //   intern: bookingDetails.intern,
    //   bookingId,
    // });

    let promiseArray = [
      // create a notification for intern
      registerNotification(notification),
      scheduleReminderEmails({
        bookingId,
        startDate: updatedBookingRequest.startDate,
        hostId: updatedBookingRequest.host._id,
        internId: updatedBookingRequest.intern._id,
      }),
      // store the answers
      // createChecklistAnswers(answers),
    ];

    if (process.env.NODE_ENV === 'production') {
      promiseArray = [
        ...promiseArray, // send email to intern
        requestAcceptedToIntern(bookingDetails),
        // send email to admin
        requestAcceptedToAdmin(bookingDetails),
      ];
    }
    await Promise.all(promiseArray);

    if (session) {
      await session.commitTransaction();
    }
    return res.json({ newStatus: status });
  } catch (error) {
    if (session) {
      await session.abortTransaction();
    }
    return next(boom.badImplementation(error));
  } finally {
    if (session) {
      session.endSession();
    }
  }
};

module.exports = acceptBooking;
