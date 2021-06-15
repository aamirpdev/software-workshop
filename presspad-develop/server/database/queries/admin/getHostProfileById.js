const mongoose = require('mongoose');

const { User } = require('../../models');

const getHostByUserId = async userId => {
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
        from: 'listings',
        localField: '_id',
        foreignField: 'user',
        as: 'listing',
      },
    },
    {
      $unwind: '$profile',
    },
    {
      $unwind: '$listing',
    },
  ]);
  return profile;
};

module.exports = getHostByUserId;
