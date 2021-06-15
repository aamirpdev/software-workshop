const { object, string, boolean, array } = require('yup');
const { signup, DEFAULT_REQUIRED } = require('../constants/errorMessages');

const {
  NAME_REQUIRED,
  NAME_SHORT,
  NAME_LONG,
  EMAIL_REQUIRED,
  EMAIL_INVALID,
  PASSWORD_REQUIRED,
  PASSWORD_WEAK,
} = signup;
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

// eslint-disable-next-line no-useless-escape
const phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;

const myAccountSchema = object({
  name: string()
    .required(NAME_REQUIRED)
    .min(3, NAME_SHORT)
    .max(30, NAME_LONG),
  email: string()
    .email(EMAIL_INVALID)
    .required(EMAIL_REQUIRED),
  oldPassword: string().when('changePasswordActive', {
    is: true,
    then: string().required(PASSWORD_REQUIRED),
    otherwise: string().nullable(),
  }),
  newPassword: string().when('changePasswordActive', {
    is: true,
    then: string()
      .matches(passwordPattern, PASSWORD_WEAK)
      .nullable(),
    otherwise: string().nullable(),
  }),
  changePasswordActive: boolean().nullable(),
});

const accountDetails = prevValues =>
  object({
    firstName: prevValues.firstName
      ? string()
          .required(DEFAULT_REQUIRED)
          .min(3, NAME_SHORT)
          .max(30, NAME_LONG)
      : string()
          .nullable()
          .min(3, NAME_SHORT)
          .max(30, NAME_LONG),
    lastName: prevValues.lastName
      ? string()
          .required(DEFAULT_REQUIRED)
          .min(3, NAME_SHORT)
          .max(30, NAME_LONG)
      : string()
          .nullable()
          .min(3, NAME_SHORT)
          .max(30, NAME_LONG),
    phone: prevValues.phone
      ? string()
          .required(DEFAULT_REQUIRED)
          .matches(phoneRegExp, 'Phone number is not valid')
      : string()
          .nullable()
          .matches(phoneRegExp, 'Phone number is not valid'),
    email: prevValues.email
      ? string()
          .email()
          .required(DEFAULT_REQUIRED)
      : string()
          .email()
          .nullable(),
  });

const myProfile = prevValues => {
  const isOpportunityRequired = property =>
    // eslint-disable-next-line no-shadow
    function isOpportunityRequired(value) {
      const { key } = this.parent;
      const opportunity = prevValues.internshipOpportunities[key];

      if (opportunity && opportunity[property]) {
        return !!value;
      }
      return true;
    };

  return object({
    description: prevValues.description
      ? string()
          .ensure()
          .wordLengthValidator(250)
          .required(DEFAULT_REQUIRED)
      : string()
          .ensure()
          .wordLengthValidator(250)
          .nullable(),
    internshipOpportunities: array()
      .of(
        object().shape({
          opportunity: string().test(
            'isRequired',
            DEFAULT_REQUIRED,
            isOpportunityRequired('opportunity'),
          ),
          link: string().test(
            'isRequired',
            DEFAULT_REQUIRED,
            isOpportunityRequired('link'),
          ),
          details: string().test(
            'isRequired',
            DEFAULT_REQUIRED,
            isOpportunityRequired('details'),
          ),
        }),
      )
      .min(prevValues.internshipOpportunities.length),
    contactDetails: object({
      name:
        prevValues.contactDetails && prevValues.contactDetails.name
          ? string()
              .required(DEFAULT_REQUIRED)
              .min(3, NAME_SHORT)
              .max(30, NAME_LONG)
          : string()
              .nullable()
              .min(3, NAME_SHORT)
              .max(30, NAME_LONG),

      phone:
        prevValues.contactDetails && prevValues.contactDetails.phone
          ? string()
              .required(DEFAULT_REQUIRED)
              .matches(phoneRegExp, 'Phone number is not valid')
          : string()
              .nullable()
              .matches(phoneRegExp, 'Phone number is not valid'),
      email:
        prevValues.contactDetails && prevValues.contactDetails.email
          ? string()
              .email()
              .required(DEFAULT_REQUIRED)
          : string()
              .email()
              .nullable(),
    }),
  });
};

module.exports = {
  myAccountSchema,
  myProfile,
  accountDetails,
};
