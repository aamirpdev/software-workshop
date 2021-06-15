const sendMail = require('./templates');
const Sentry = require('../../sentry');

async function sendEmails({ host, intern, _id }) {
  const internName = intern.name;
  const hostName = host.name;
  const bookingId = _id;

  await sendMail({
    type: 'BOOKING_COMPLETED',
    userType: 'internAndHost',
    params: { to: intern.email, internName, hostName, bookingId },
  });
  await sendMail({
    type: 'BOOKING_COMPLETED',
    userType: 'internAndHost',
    params: { to: host.email, internName, hostName, bookingId },
  });
}

module.exports = async ({ completedBookings }) => {
  const arr = completedBookings.map(({ host, intern, _id }) =>
    sendEmails({ host, intern, _id }),
  );

  try {
    await Promise.all(arr);
  } catch (error) {
    Sentry.captureException(error);
  }
};
