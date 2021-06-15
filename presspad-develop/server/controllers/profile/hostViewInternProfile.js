const boom = require('boom');
const mongoose = require('mongoose');

const generateUrl = require('../../helpers/generateFileURL');
const getInternPublicProfile = require('../../database/queries/profile/internPublicProfile');
const internProfileBookingView = require('../../database/queries/profile/internProfileBookingView');
const { getConfirmedBooking } = require('../../database/queries/bookings');

module.exports = async (req, res, next) => {
  try {
    const { id: internId } = req.params;
    const { view } = req.query;
    const { role, _id: hostId } = req.user;
    // check for role
    if (!['host', 'organisation'].includes(role)) {
      return next();

      // ToDo check autherization for the other route??
      // return next(boom.forbidden());
    }

    if (!mongoose.Types.ObjectId.isValid(internId)) {
      return next(boom.notFound());
    }

    if (view === 'booking_details') {
      const confirmedBookings = await getConfirmedBooking(internId, hostId);
      if (confirmedBookings) {
        const profileData = await internProfileBookingView(internId);
        if (!profileData[0]) return next(boom.notFound());
        return res.json(profileData[0]);
      }
    }

    // get intern's basic profile data
    const profileData = await getInternPublicProfile(internId);

    if (!profileData && profileData.data) return next(boom.notFound());
    if (profileData.profile && profileData.profile.profileImage) {
      await generateUrl(profileData.profile.profileImage);
    }
    const { reference1, reference2 } = profileData.profile;
    const referencesNum =
      ((reference1 && reference1.name && 1) || 0) +
      ((reference2 && reference2.name && 1) || 0);

    profileData.referencesNum = referencesNum;

    return res.json(profileData);
  } catch (error) {
    return next(boom.badImplementation(error));
  }
};