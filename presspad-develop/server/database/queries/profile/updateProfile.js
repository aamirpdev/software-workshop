const Profile = require('../../models/Profile');

module.exports.updateProfile = (profileId, updates) =>
  Profile.findOneAndUpdate({ _id: profileId }, updates);
