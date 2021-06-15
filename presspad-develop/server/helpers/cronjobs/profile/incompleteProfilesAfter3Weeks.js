const {
  getUnapprovedProfiles,
} = require('../../../database/queries/profile/getProfile');
const Profile = require('../../../database/models/Profile');
const sendProfileReminderEmail = require('../../../services/mailing/sendProfileReminderEmail');

module.exports = async Sentry => {
  try {
    const unapprovedProfiles = await getUnapprovedProfiles();

    if (!unapprovedProfiles.length) return null;

    await unapprovedProfiles.forEach(async profile => {
      const { user } = profile;
      await sendProfileReminderEmail(user);
    });

    const profileIds = unapprovedProfiles.map(profile => profile._id);

    return Profile.updateMany(
      { _id: { $in: profileIds } },
      { isNotifiedAfter3Weeks: true },
    );
  } catch (err) {
    if (Sentry) {
      Sentry.captureException(err);
    }
    console.log('err', err);
  }
};
