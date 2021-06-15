// expect boolean and profileId

const boom = require('boom');
const pubSub = require('../../pubSub');

// QUERIES
const {
  approveRejectProfile,
} = require('../../database/queries/profile/verifyProfile');

const {
  getUserDataByProfileId,
} = require('../../database/queries/profile/getProfile');

const { registerNotification } = require('../../services/notifications');

module.exports = async (req, res, next) => {
  const { verify, profileId } = req.body;
  if (req.user.role !== 'admin')
    return next(boom.forbidden('Only admin can access this route'));
  try {
    await approveRejectProfile(profileId, verify);

    // get user details
    const [user] = await getUserDataByProfileId(profileId);
    if (verify) {
      pubSub.emit(pubSub.events.profile.APPROVED, { user });

      const notification = {
        private: false,
        user,
        type: 'profileApproved',
      };
      registerNotification(notification);
    }

    return res.json('success');
  } catch (error) {
    return next(boom.badImplementation(error));
  }
};
