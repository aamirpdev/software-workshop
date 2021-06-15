const mongoose = require('mongoose');
const User = require('../../models/User');

const getInternPublicProfile = async userId => {
  const [profile] = await User.aggregate([
    {
      $match: {
        _id: mongoose.Types.ObjectId(userId),
      },
    },
    {
      $lookup: {
        from: 'profiles',
        localField: '_id',
        foreignField: 'user',
        as: 'profile',
      },
    },
    {
      $unwind: '$profile',
    },
    {
      $project: {
        name: 1,
        'profile.birthDate': 1,
        'profile.profileImage': 1,
        'profile.bio': 1,
        'profile.lastStudyUniversity': 1,
        'profile.hometown': 1,
        'profile.interests': 1,
        'profile.gender': 1,
        'profile.organisation': 1,
        'profile.useReasonAnswer': 1,
        'profile.issueAnswer': 1,
        'profile.storyAnswer': 1,
        'profile.mentorDescribeAnswer': 1,
        'profile.verified': 1,
        'profile.reference1': 1,
        'profile.reference2': 1,
      },
    },
  ]);
  return profile;
};

module.exports = getInternPublicProfile;
