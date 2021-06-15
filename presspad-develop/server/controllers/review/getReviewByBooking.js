const boom = require('boom');
const { findReviewByBooking } = require('../../database/queries/review');

module.exports = async (req, res, next) => {
  const { id: booking } = req.params;

  try {
    // get all reviews for that booking
    const reviews = await findReviewByBooking(booking);

    return res.json(reviews);
  } catch (error) {
    return next(boom.badImplementation(error));
  }
};
