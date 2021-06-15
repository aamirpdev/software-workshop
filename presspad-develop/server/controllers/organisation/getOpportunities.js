const boom = require('boom');

const getOpportunities = require('../../database/queries/organisation/getOpportunities');

module.exports = async (req, res, next) => {
  try {
    const data = await getOpportunities();

    res.json(data);
  } catch (error) {
    next(boom.badImplementation(error));
  }
};
