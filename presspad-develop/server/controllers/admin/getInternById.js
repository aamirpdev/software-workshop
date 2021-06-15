const boom = require('boom');
const {
  getInternById: getInternByIdQuery,
} = require('../../database/queries/admin');
const generateUrl = require('../../helpers/generateFileURL');

const getInternById = async (req, res, next) => {
  const { id } = req.params;

  const intern = await getInternByIdQuery(id);

  if (!intern || !intern.profile) {
    return next(boom.notFound('Not Found'));
  }

  const promises = [
    generateUrl(intern.profile.DBSCheck),
    generateUrl(intern.profile.profileImage),
    generateUrl(intern.profile.photoID),
  ];

  await Promise.all(promises);

  res.json(intern);
};

module.exports = getInternById;
