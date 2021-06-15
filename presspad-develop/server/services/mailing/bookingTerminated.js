const sendMail = require('./templates');
const { getBookingUsersInfo } = require('./helpers');
const { getOrganisationAdminByOrgId } = require('../../database/queries/user');

module.exports = async ({ bookingId, host: _host, intern: _intern }) => {
  const { host, intern } = await getBookingUsersInfo({
    bookingId,
    host: _host,
    intern: _intern,
  });

  const organisation = await getOrganisationAdminByOrgId(intern.organisation);

  await sendMail({
    type: 'BOOKING_TERMINATED',
    userType: 'intern',
    params: { to: intern.email },
  });

  await sendMail({
    type: 'BOOKING_TERMINATED',
    userType: 'host',
    params: { to: host.email, internName: intern.name },
  });

  await sendMail({
    type: 'BOOKING_TERMINATED',
    userType: 'organisation',
    params: { to: organisation.email, internName: intern.name },
  });

  // todo send to admin if there is
};
