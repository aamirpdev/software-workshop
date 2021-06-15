const mongoose = require('mongoose');
const { Organisation } = require('../../models');

/**
 *  Intern views single opportunity (org profile)
 * @param {stirng} id org id
 */
function getSingleOpportunity(id) {
  return Organisation.aggregate([
    { $match: { _id: mongoose.Types.ObjectId(id) } },
    {
      $project: {
        id: 1,
        name: 1,
        description: 1,
        contactDetails: 1,
        internshipOpportunities: 1,
      },
    },
  ]);
}

module.exports = getSingleOpportunity;
