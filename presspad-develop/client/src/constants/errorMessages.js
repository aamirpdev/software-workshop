module.exports = {
  SERVER_ERROR: 'Something went wrong, try again later',
  GENDER: 'Gender is required',
  HOMETOWN: 'Hometown is required',
  BIO: 'Please write a short bio about yourself',
  JOB_TITLE: 'Job title is required',
  REQUIRED_FIELD: 'required',
  // show field title on the backend only
  REQUIRED: field =>
    this && this.window
      ? `This field is required`
      : `This field is required ${field}`,
  BIRTHDATE: 'Please provide your birth date',
  SCHOOL: 'Please enter your school or university',
  PROFILE_IMAGE: 'Please upload a photo of yourself',
  AREA_OF_INTEREST: 'Please select an area of interest',
  MAX: length => `Must be ${length} characters or less`,
  CONSENT: 'You must agree to the terms in order to use PressPad',

  // host specific
  LISTING_PHOTOS_ERROR: 'You must provide 3 photos',
  AVAILABLE_DATES: 'You must include at least 1 start and end date',
  ACCOMMODATION_CHECKLIST: 'Accommodation Checklist must check at least one',
  PHOTO_ID: 'You must provide a photo of your ID card',
  PHONE_NUMBER: 'You must provide a phone number',
  ORGANISATION: 'Organisation is required',
  WORKING_AREA: 'Working area is required',
  EMAIL: 'Invalid email',
  INVALID_DATE: 'please select valid date',
  INVALID_END_DATE: 'please select an end date greater than your start date',
  DEFAULT_REQUIRED: 'This field is required',
  // sign up fields
  signup: {
    NAME_REQUIRED: 'Please enter your name.',
    NAME_SHORT: 'minimum length is 3 characters',
    NAME_LONG: 'maximum length is 15 characters',
    EMAIL_REQUIRED: 'Please enter your email.',
    EMAIL_INVALID: 'Please enter a valid email.',
    ORGANISATION_REQUIRED: 'Please enter your organisation',
    PASSWORD_REQUIRED: 'Please enter your password.',
    PASSWORD_SHORT: 'Password is too short.',
    PASSWORD_NOT_MATCH: 'Passwords do not match.',
    PASSWORD_WEAK:
      'Password requires 8 characters including at least 1 uppercase character and 1 number.',
    ROLE_INVALID: 'invalid role',
    ROLE_REQUIRED: 'role is required',
  },
  leaveReview: {
    TEXTAREA: 'Your review must be at least 50 characters',
  },
};