const boom = require('boom');
const { ObjectId } = require('mongoose').Types;

const {
  getClientById: getClientByIdQuery,
} = require('../../database/queries/admin');

async function getClientById(req, res, next) {
  const { id } = req.params;
  if (!ObjectId.isValid(id)) {
    return boom.badRequest();
  }

  try {
    const [data] = await getClientByIdQuery(id);
    res.json(data);
  } catch (error) {
    next(boom.badImplementation(error));
  }
}

module.exports = getClientById;
