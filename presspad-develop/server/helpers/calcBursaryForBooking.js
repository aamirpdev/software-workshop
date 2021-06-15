const { getBursaryApplicationById } = require('../database/queries/bursary');
const { getCoupons } = require('../database/queries/coupon');
const { calculateDaysRange } = require('./dateHelper/index');
const { getDiscountDays } = require('./payments');

/**
 * Check if the booking is covered
 * and calculate bursary discount and code discount
 * @param {object} bookingDetails
 * @returns
 */
const calcBursaryForBooking = async bookingDetails => {
  const {
    approvedBursary: bursaryApplicationId,
    coupon: couponId,
    startDate,
    endDate,
    price,
  } = bookingDetails;

  const bursaryDetails = await getBursaryApplicationById(bursaryApplicationId);
  const [coupon] = await getCoupons({ _id: couponId });

  let couponDiscount = 0;
  let couponDiscountDays;

  if (coupon) {
    // get number of booking days
    const noBookingDays = calculateDaysRange(startDate, endDate);
    // get coupon discount days that maches the booking dates
    const { discountDays } = getDiscountDays({
      bookingStart: startDate,
      bookingEnd: endDate,
      couponStart: coupon.startDate,
      couponEnd: coupon.endDate,
      usedDays: coupon.usedDays,
    });
    couponDiscountDays = discountDays;

    // Validate coupon discount days
    if (noBookingDays !== discountDays) {
      throw new Error('wrong coupon dates');
    }

    // Calculate coupon discount amount
    couponDiscount = (price * coupon.discountRate) / 100;

    // validate couponDiscount ???? ToDo
  }

  // Calculate bursary discount amount
  let bursaryDiscount = 0;
  if (bursaryDetails) {
    bursaryDiscount = (bursaryDetails.discountRate * price) / 100;

    if (bursaryDetails.londonWeighting) {
      bursaryDiscount =
        (bursaryDetails.discountRate * price) / 100 + price * 0.2;
    }

    const remainingPrice = price - couponDiscount;
    if (remainingPrice < bursaryDiscount) {
      bursaryDiscount = remainingPrice;
    }

    // check bursaryDiscount against the remaining amount of the bursary
    const remainingInBursary =
      bursaryDetails.totalPotentialAmount - bursaryDetails.totalSpentSoFar;
    if (remainingInBursary < bursaryDiscount) {
      bursaryDiscount = remainingInBursary;
    }
  }

  return {
    isBookingCovered: price === couponDiscount + bursaryDiscount,
    couponDiscount,
    couponDiscountDays,
    bursaryDiscount,
    coupon,
  };
};

module.exports = calcBursaryForBooking;
