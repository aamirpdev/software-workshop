const { Organisation } = require('../../models');

/**
 * Intern views opportunities
 */
function getOpportunities() {
  return Organisation.aggregate([
    {
      $unwind: '$internshipOpportunities',
    },
    {
      $project: {
        id: 1,
        orgName: '$name',
        key: '$internshipOpportunities.key',
        name: '$internshipOpportunities.opportunity',
        link: '$internshipOpportunities.link',
        details: '$internshipOpportunities.details',
      },
    },
  ]);
}

module.exports = getOpportunities;
