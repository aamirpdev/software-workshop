const mongoose = require('mongoose');

const { User } = require('../../models');

const getInternByUserId = async userId => {
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
      $lookup: {
        from: 'bursaries',
        localField: '_id',
        foreignField: 'intern',
        as: 'bursary',
      },
    },
    {
      $unwind: '$profile',
    },
    {
      $unwind: '$bursary',
    },
    {
      $project: {
        password: 0,
      },
    },
  ]);
  return profile;
};

module.exports = getInternByUserId;
