const moment = require('moment');
const sendMail = require('./templates');
const { getOrganisationAdminByOrgId } = require('../../database/queries/user');
const { getBookingById } = require('../../database/queries/bookings');
const { getBookingUsersInfo } = require('./helpers');

module.exports = async ({
  bookingId,
  host: _host,
  intern: _intern,
  freeAutomaticAccept,
}) => {
  const { intern, host } = await getBookingUsersInfo({
    bookingId,
    intern: _intern,
    host: _host,
  });
  const organisation = await getOrganisationAdminByOrgId(intern.organisation);
  const bookingDetails = await getBookingById(bookingId);

  await sendMail({
    type: freeAutomaticAccept
      ? 'BOOKING_CONFIRMED_NO_PAYMENT'
      : 'BOOKING_UPDATE_WAITING_FOR_PAYMENT',
    userType: 'host',
    params: { to: host.email },
  });

  await sendMail({
    type: freeAutomaticAccept
      ? 'BOOKING_CONFIRMED_NO_PAYMENT'
      : 'BOOKING_APPROVED_PAYMENT_NEEDED',
    userType: 'intern',
    params: { to: intern.email },
  });

  await sendMail({
    type: 'BOOKING_ACCEPTED',
    userType: 'organisation',
    params: {
      to: organisation.email,
      internName: intern.name,
      startDate:
        bookingDetails[0].startDate &&
        moment(bookingDetails[0].startDate).format('DD/MM/YYYY'),
      endDate:
        bookingDetails[0].endDate &&
        moment(bookingDetails[0].endDate).format('DD/MM/YYYY'),
    },
  });
};
