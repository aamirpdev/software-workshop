const Installment = require('../../models/Installment');

const reset = () => Installment.deleteMany();

const createAll = async ({ bookings, users, internalTransactions }) => {
  const {
    internalTransactionsPaidUpFrontIntern,
    internalTransactionsConfirmedPaidFirst,
    internalTransactionsConfirmedPaidFirstNoCoupon,
    internalTransactionsCompletedBooking,
  } = internalTransactions;
  const { internUser, hostUser } = users;
  await reset();

  const {
    confirmedPaidUpfront,
    confirmedPaidFirst,
    confirmedPaidFirstNoCoupon,
    completedBooking,
  } = bookings;

  const installments = [
    // for the confirmed booking and paid upfront
    {
      booking: confirmedPaidUpfront._id,
      intern: internUser._id,
      host: hostUser._id,
      amount: confirmedPaidUpfront.payedAmount,
      dueDate: Date.now(),
      transaction: internalTransactionsPaidUpFrontIntern._id,
      key: 0,
    },
    // for the confimed booking and paid first insatallment
    {
      booking: confirmedPaidFirst._id,
      intern: internUser._id,
      host: hostUser._id,
      amount: confirmedPaidFirst.payedAmount,
      dueDate: Date.now(),
      transaction: internalTransactionsConfirmedPaidFirst._id,
      key: 0,
    },
    {
      booking: confirmedPaidFirst._id,
      intern: internUser._id,
      host: hostUser._id,
      amount: 28000,
      dueDate: Date.now() + 179 * 24 * 60 * 60 * 1000,
      key: 1,
    },
    {
      booking: confirmedPaidFirst._id,
      intern: internUser._id,
      host: hostUser._id,
      amount: 4000,
      dueDate: Date.now() + 207 * 24 * 60 * 60 * 1000,
      key: 2,
    },
    // for the confimed booking and paid first insatallment no coupon
    {
      booking: confirmedPaidFirstNoCoupon._id,
      intern: internUser._id,
      host: hostUser._id,
      amount: confirmedPaidFirstNoCoupon.payedAmount,
      dueDate: Date.now() + 2 * 24 * 60 * 60 * 1000,
      transaction: internalTransactionsConfirmedPaidFirstNoCoupon._id,
      key: 0,
    },
    {
      booking: confirmedPaidFirstNoCoupon._id,
      intern: internUser._id,
      host: hostUser._id,
      amount: 56000,
      dueDate: Date.now() + 181 * 24 * 60 * 60 * 1000,
      key: 1,
    },
    {
      booking: confirmedPaidFirstNoCoupon._id,
      intern: internUser._id,
      host: hostUser._id,
      amount: 16000,
      dueDate: Date.now() + 209 * 24 * 60 * 60 * 1000,
      key: 2,
    },
    // completed booking
    {
      booking: completedBooking._id,
      intern: internUser._id,
      host: hostUser._id,
      amount: 12000,
      dueDate: Date.now() + 207 * 24 * 60 * 60 * 1000,
      transaction: internalTransactionsCompletedBooking._id,
      key: 0,
    },
  ];

  const [
    upfrontPayment,
    firstPaidPayment,
    secondUnpaidPayment,
    thirdUnpaidPayment,
    firstPaidPaymentNoCoupon,
    secondUnpaidPaymentNoCoupon,
    thirdUnpaidPaymentNoCoupon,
    completedBookingPayment,
  ] = await Installment.create(installments);

  return {
    upfrontPayment,
    firstPaidPayment,
    secondUnpaidPayment,
    thirdUnpaidPayment,
    firstPaidPaymentNoCoupon,
    secondUnpaidPaymentNoCoupon,
    thirdUnpaidPaymentNoCoupon,
    completedBookingPayment,
  };
};

module.exports = {
  createAll,
  reset,
};
