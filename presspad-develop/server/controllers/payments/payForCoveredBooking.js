const {
  createInternalTransaction,
  updateCouponTransaction,
} = require('../../database/queries/payments');
const { updateBursaryApplication } = require('../../database/queries/bursary');

const payForCoveredBooking = async ({
  couponDiscount,
  couponDiscountDays,
  bursaryDiscount,
  bookingDetails,
  coupon,
  session,
}) => {
  const { _id: bookingId, intern, host, approvedBursary } = bookingDetails;

  if (couponDiscount > 0) {
    const { organisationAccount } = coupon;

    const { _id: transactionId } = await createInternalTransaction(
      intern._id,
      organisationAccount,
      host._id,
      couponDiscount,
      'couponTransaction',
      session,
    );

    await updateCouponTransaction(
      intern._id,
      coupon._id,
      transactionId,
      bookingId,
      couponDiscountDays,
      couponDiscount,
      session,
    );
  }

  if (bursaryDiscount > 0) {
    // create internal transaction for bursary
    const transaction = await createInternalTransaction(
      intern._id,
      null,
      host.account,
      bursaryDiscount,
      'bursaryTransaction',
      session,
    );

    // update bursaryApplication
    const updateData = {
      $inc: { totalSpentSoFar: bursaryDiscount },
      $push: {
        transactions: {
          amount: bursaryDiscount,
          booking: bookingId,
          transaction: transaction._id,
        },
      },
    };

    await updateBursaryApplication({
      id: approvedBursary,
      updateData,
      session,
    });
  }
};

module.exports = payForCoveredBooking;
