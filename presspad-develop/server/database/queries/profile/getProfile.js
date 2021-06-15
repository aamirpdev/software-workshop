const mongoose = require('mongoose');

const Profile = require('../../models/Profile');

const getProfileByUserId = id => Profile.findOne({ user: id });
const getProfileById = id => Profile.findById(id);

const getProfileByRoleAndId = (id, role) =>
  Profile.aggregate([
    { $match: { user: mongoose.Types.ObjectId(id) } },
    {
      $lookup: {
        from: 'users',
        localField: 'user',
        foreignField: '_id',
        as: 'user',
      },
    },
    { $match: { 'user.role': role } },
    {
      $project: {
        'user.password': 0,
        'user.email': 0,
        'user.organisation': 0,
        'user.account': 0,
        'user.role': 0,
      },
    },
  ]);

const getUserDataByProfileId = id =>
  Profile.aggregate([
    {
      $match: { _id: mongoose.Types.ObjectId(id) },
    },
    {
      $lookup: {
        from: 'users',
        localField: 'user',
        foreignField: '_id',
        as: 'user',
      },
    },
    {
      $project: {
        user: { $arrayElemAt: ['$user', 0] },
      },
    },
    {
      $replaceRoot: { newRoot: '$user' },
    },
    {
      $project: {
        password: 0,
      },
    },
  ]);

const getUnapprovedProfiles = () =>
  Profile.aggregate([
    {
      $match: {
        $and: [{ isCompleted: false }, { isNotifiedAfter3Weeks: false }],
      },
    },
    {
      $lookup: {
        from: 'users',
        localField: 'user',
        foreignField: '_id',
        as: 'user',
      },
    },
    {
      $match: {
        $or: [{ 'user.role': 'host' }, { 'user.role': 'intern' }],
      },
    },
    {
      $unwind: '$user',
    },
    {
      $project: {
        // greater than three weeks ago
        _id: 1,
        'user.email': 1,
        'user.name': 1,
        'user.role': 1,
        old: { $lt: ['$createdAt', new Date(-1814400000)] },
      },
    },
    {
      $match: { old: true },
    },
  ]);

module.exports = {
  getProfileByUserId,
  getProfileByRoleAndId,
  getUserDataByProfileId,
  getProfileById,
  getUnapprovedProfiles,
};
