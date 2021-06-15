const sendMail = require('./templates');
const { getBookingUsersInfo } = require('./helpers');

module.exports = async ({ host: _host, intern: _intern, bookingId }) => {
  const { intern, host } = await getBookingUsersInfo({
    bookingId,
    intern: _intern,
    host: _host,
  });

  await sendMail({
    type: 'BOOKING_CONFIRMED_AFTER_PAYMENT',
    userType: 'intern',
    params: { to: intern.email, hostName: host.name, bookingId },
  });
  await sendMail({
    type: 'BOOKING_CONFIRMED_AFTER_PAYMENT',
    userType: 'host',
    params: { to: host.email, internName: intern.name, bookingId },
  });
};
