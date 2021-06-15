const { object, number } = require('yup');
const { REQUIRED_FIELD } = require('../../../../constants/errorMessages');

const schema = object({
  amount: number()
    .moreThan(0)
    .lessThan(100000)
    .required(REQUIRED_FIELD),
});

module.exports = schema;
