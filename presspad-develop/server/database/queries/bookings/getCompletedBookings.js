const Booking = require('../../models/Booking');

module.exports = () =>
  Booking.aggregate([
    {
      $match: {
        $expr: {
          $and: [
            { $lt: ['$endDate', new Date()] },
            { $eq: ['$status', 'confirmed'] },
            { $eq: ['$price', '$payedAmount'] },
          ],
        },
      },
    },
    {
      $lookup: {
        from: 'users',
        let: { internId: '$intern' },
        pipeline: [
          {
            $match: {
              $expr: { $eq: ['$_id', '$$internId'] },
            },
          },
          {
            $project: {
              password: 0,
            },
          },
        ],
        as: 'intern',
      },
    },
    {
      $unwind: '$intern',
    },
    {
      $lookup: {
        from: 'users',
        let: { hostId: '$host' },
        pipeline: [
          {
            $match: {
              $expr: { $eq: ['$_id', '$$hostId'] },
            },
          },
          {
            $project: {
              password: 0,
              account: 0,
              referralToken: 0,
            },
          },
        ],
        as: 'host',
      },
    },
    {
      $unwind: '$host',
    },
  ]);
