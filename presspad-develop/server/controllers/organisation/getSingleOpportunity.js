const boom = require('boom');

const getSingleOpportunity = require('../../database/queries/organisation/getSingleOpportunity');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const { key } = req.query;
  try {
    const [data] = await getSingleOpportunity(id, key);

    if (!data) {
      return next(boom.notFound());
    }

    res.json(data);
  } catch (error) {
    next(boom.badImplementation(error));
  }
};
