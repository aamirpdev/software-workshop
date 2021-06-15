const boom = require('boom');
const mongoose = require('mongoose');
const pubSub = require('../../pubSub');

const { getUserById } = require('../../database/queries/user');

const {
  updateBookingByID,
  adminRejectBookingById,
  getBookingWithUsers,
} = require('../../database/queries/bookings');
const { registerNotification } = require('../../services/notifications');

const calcBursaryForBooking = require('../../helpers/calcBursaryForBooking');
const { payForCoveredBooking } = require('../payments');
const { bookingStatuses } = require('../../constants');

const adminReviewsBooking = async (req, res, next) => {
  const { booking, status, message } = req.body;
  const { _id: bookingID, price } = booking;

  const bookingDetails = await getBookingWithUsers(bookingID);
  const { intern, host } = bookingDetails;

  const userDetails = await getUserById(host, true);
  const { acceptAutomatically } = userDetails;

  let session;

  try {
    // if rejected, create a notification for intern
    if (status === 'rejected by admin') {
      await adminRejectBookingById(bookingID, message);

      const notification = {
        private: true,
        user: intern._id,
        secondParty: req.user._id,
        type: 'stayRejected',
        booking: bookingID,
        message,
      };

      // EMAIL TO GO HERE - MIGHT BE ABLE TO USE REJECTBOOKING.JS EMAIL
      pubSub.emit(pubSub.events.booking.REJECTED, {
        bookingId: bookingID,
        intern,
        host,
        rejectedBy: 'admin',
      });

      await registerNotification(notification);
      return res.json({ success: 'Booking request successfully updated' });
    }

    let hostNotification;
    let internNotification;

    if (acceptAutomatically) {
      // Notification to let host know they have a confirmed request
      hostNotification = {
        user: host._id,
        secondParty: intern._id,
        type: 'stayApproved',
        booking: bookingID,
        private: true,
      };

      // Notification to let intern know their request is accepted
      internNotification = {
        user: intern._id,
        secondParty: host._id,
        type: 'stayApproved',
        booking: bookingID,
        private: true,
      };
      // if booking is free confirm booking automatically
      if (price === 0) {
        await updateBookingByID(bookingID, 'confirmed', true);

        // send confirmed without pay booking email
        pubSub.emit(pubSub.events.booking.ACCEPTED_BY_HOST, {
          bookingId: bookingID,
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

          await updateBookingByID(
            bookingID,
            bookingStatuses.confirmed,
            true,
            bursaryDiscount,
            session,
          );

          // send confirmed booking email
          pubSub.emit(pubSub.events.booking.CONFIRMED_AFTER_PAYMENT, {
            bookingId: bookingDetails._id,
            internAccount: intern,
            hostAccount: host,
          });
        } else {
          await updateBookingByID(bookingID, bookingStatuses.accepted, true);
          // Notification to let host know they have a confirmed request
          hostNotification = {
            user: host._id,
            secondParty: intern._id,
            type: 'stayAccepted',
            booking: bookingID,
            private: true,
          };

          // Notification to let intern know their request is accepted
          internNotification = {
            user: intern._id,
            secondParty: host._id,
            type: 'stayAccepted',
            booking: bookingID,
            private: true,
          };

          // send accepted booking email
          pubSub.emit(pubSub.events.booking.ACCEPTED_BY_HOST, {
            bookingId: bookingID,
            intern,
            host,
            freeAutomaticAccept: false,
          });
        }
      }

      await registerNotification(hostNotification);
      await registerNotification(internNotification);

      if (session) {
        await session.commitTransaction();
      }

      return res.json({ success: 'Booking request successfully updated' });
    }

    await updateBookingByID(bookingID, status);

    // Notification to let host know they have a booking request
    const notification = {
      user: host._id,
      secondParty: intern._id,
      type: 'stayRequest',
      private: false,
      booking: bookingID,
    };

    pubSub.emit(pubSub.events.booking.ACCEPTED_BY_ADMIN, {
      bookingId: bookingID,
      intern,
      host,
    });

    await registerNotification(notification);

    // EMAIL TO GO HERE TO LET HOST KNOW THEY HAVE BOOKING REQUEST

    return res.json({ success: 'Booking request successfully updated' });
  } catch (err) {
    if (session) {
      await session.abortTransaction();
    }
    return next(boom.badImplementation(err));
  } finally {
    if (session) {
      session.endSession();
    }
  }
};

module.exports = adminReviewsBooking;
