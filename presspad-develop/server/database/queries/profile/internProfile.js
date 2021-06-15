const mongoose = require('mongoose');

const { User } = require('../../models');

const getInternProfile = async userId => {
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
        password: 0,
      },
    },
  ]);
  return profile;
};

module.exports = getInternProfile;
