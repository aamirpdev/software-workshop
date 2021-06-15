const boom = require('boom');

const { updateUserProfile } = require('../../../database/queries/profiles');
const { deleteFile } = require('../../../helpers/storage');
const { storageBucket: bucketName } = require('../../../config');
const { updateListing } = require('../../../database/queries/listing');
const {
  getListingByUserId,
} = require('../../../database/queries/listing/getListing');
const { hostCompleteProfile } = require('../../../../client/src/validation');

module.exports = async (req, res, next) => {
  let completed;

  const { user } = req;

  const {
    profileImage,
    photos,
    address = {},
    availableDates,
    accommodationChecklist,
    bio,
    otherInfo,
    hostingReasonAnswer,
    mentoringExperienceAnswer,
    industryExperienceAnswer,
    backgroundAnswer,
    photosToDelete,
  } = req.body;

  try {
    let addressUpdated = false;

    const listing = await getListingByUserId(user._id);
    const { address: prevAddress = {} } = listing || {};

    if (address && prevAddress) {
      if (
        address.postcode !== prevAddress.postcode ||
        address.addressline1 !== prevAddress.addressline1 ||
        address.addressline2 !== prevAddress.addressline2 ||
        address.city !== prevAddress.city
      ) {
        addressUpdated = true;
      }
    }

    const myListingData = {
      photos,
      address,
      availableDates,
      accommodationChecklist,
      otherInfo,
    };

    const myProfileData = {
      profileImage,
      bio,
      hostingReasonAnswer,
      mentoringExperienceAnswer,
      industryExperienceAnswer,
      backgroundAnswer,
    };

    const updatedProfile = await updateUserProfile(
      user._id,
      myProfileData,
    ).lean();

    const updatedListing = await updateListing(user._id, myListingData);

    try {
      await hostCompleteProfile.validate({
        ...updatedProfile,
        ...updatedListing,
      });
      completed = true;
    } catch (error) {
      completed = false;
    }

    if (!completed) {
      await updateUserProfile(user._id, {
        awaitingReview: false,
        verified: false,
        isCompleted: false,
      });
    } else if (addressUpdated) {
      await updateUserProfile(user._id, {
        awaitingReview: true,
        awaitingReviewDate: Date.now(),
        verified: false,
        houseViewingDate: '',
        isCompleted: false,
      });
    } else if (updatedProfile.verified || updatedProfile.awaitingReview) {
      if (!updatedProfile.isCompleted) {
        await updateUserProfile(user._id, {
          isCompleted: true,
        });
      }
    } else {
      await updateUserProfile(user._id, {
        awaitingReview: true,
        awaitingReviewDate: Date.now(),
        verified: false,
        isCompleted: true,
      });
    }

    if (photosToDelete && photosToDelete.length > 0) {
      const promiseArr = [];
      photosToDelete.forEach(photo => {
        if (photo) {
          promiseArr.push(
            deleteFile(bucketName, photo).catch(() => console.log('err')),
          );
        }
      });
      await Promise.all(promiseArr);
    }

    res.json();
  } catch (error) {
    next(boom.badImplementation(error));
  }
};
