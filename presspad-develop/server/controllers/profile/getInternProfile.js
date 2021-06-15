// expect userID
// responds with data obj: user info, (profile |& reviews)

const boom = require('boom');
const mongoose = require('mongoose');

const generateUrl = require('../../helpers/generateFileURL');
const getInternProfile = require('../../database/queries/profile/internProfile');

module.exports = async (req, res, next) => {
  try {
    const { id: internId } = req.params;
    const { _id: userId, role } = req.user;

    // check if user id is in request
    if (!internId) {
      return next(boom.badRequest('error loading profile'));
    }

    if (!mongoose.Types.ObjectId.isValid(internId)) {
      return next(boom.notFound());
    }

    if (
      internId !== userId.toString() &&
      role !== 'admin' &&
      role !== 'organisation'
    ) {
      return next(boom.forbidden());
    }

    const intern = await getInternProfile(internId);

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
  } catch (error) {
    return next(boom.badImplementation(error));
  }
};
