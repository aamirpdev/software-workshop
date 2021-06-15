const boom = require('boom');

const getHostResponseTimeQuery = require('../../database/queries/user/getHostResponseTime');
const { isValidMongoObjectId } = require('../../helpers/isValidMongoObjectId');

const getHostResponseTime = async (req, res, next) => {
  const { id: hostId } = req.params;

  const { role } = req.user;

  if (!hostId) return next(boom.badRequest());

  try {
    if (!isValidMongoObjectId(hostId)) {
      return next(boom.notFound('Invalid Host ID'));
    }

    if (role === 'intern') {
      const data = await getHostResponseTimeQuery(hostId);

      if (!data) {
        return next(boom.notFound());
      }

      const { respondingTime, respondedRequests } = data;
      return res.json({ respondedRequests, respondingTime });
    }
    return next(boom.unauthorized());
  } catch (err) {
    return next(boom.badImplementation(err));
  }
};

module.exports = getHostResponseTime;
