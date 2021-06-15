const orgPayment = require('./organisation');
const getPaymentsInfo = require('./getPaymentsInfo');
const internPayment = require('./intern');
const {
  withdrawRequest,
  confirmOrCancelWithdrawRequest,
} = require('./withdrawRequest');
const cancelBookingAfterPayment = require('./cancelBookingAfterPayment');
const adminAddFunds = require('./adminAddFunds');
const payForCoveredBooking = require('./payForCoveredBooking');

module.exports = {
  internPayment,
  orgPayment,
  withdrawRequest,
  confirmOrCancelWithdrawRequest,
  getPaymentsInfo,
  cancelBookingAfterPayment,
  adminAddFunds,
  payForCoveredBooking,
};
