const boom = require('boom');
const {
  getHostById: getHostByIdQuery,
} = require('../../database/queries/admin');
const generateUrl = require('../../helpers/generateFileURL');

const getHostById = async (req, res, next) => {
  const { id } = req.params;

  const host = await getHostByIdQuery(id);

  if (!host || !host.profile || !host.listing) {
    return next(boom.notFound('Not Found'));
  }
  let photos = [];

  if (host.listing.photos && host.listing.photos.length) {
    photos = host.listing.photos.map(generateUrl);
  }

  const promises = [
    generateUrl(host.profile.DBSCheck),
    generateUrl(host.profile.profileImage),
    generateUrl(host.profile.pressCard),
    generateUrl(host.profile.photoID),
    ...photos,
  ];

  await Promise.all(promises);

  res.json(host);
};

module.exports = getHostById;
