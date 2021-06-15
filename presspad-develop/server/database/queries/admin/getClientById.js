const mongoose = require('mongoose');
const { User } = require('../../models');

function getClientById(id) {
  return User.aggregate([
    { $match: { _id: mongoose.Types.ObjectId(id) } },
    // Profile Info "organisation"
    {
      $lookup: {
        from: 'organisations',
        let: { organisationId: '$organisation' },
        pipeline: [
          { $match: { $expr: { $eq: ['$$organisationId', '$_id'] } } },
        ],
        as: 'profile',
      },
    },
    {
      $project: {
        password: 0,
        account: 0,
      },
    },
  ]);
}

module.exports = getClientById;
