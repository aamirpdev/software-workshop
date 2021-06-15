const boom = require('boom');
const mongoose = require('mongoose');

const {
  createExternalTransaction,
} = require('../../database/queries/payments');

const adminAddFunds = async (req, res, next) => {
  const { orgAccount, amount } = req.body;
  const { role, _id: userId } = req.user;

  // check for user role
  if (role !== 'admin') {
    return next(boom.forbidden());
  }

  // start a mongodb session
  const session = await mongoose.startSession();
  // start transaction
  session.startTransaction();

  try {
    const transaction = await createExternalTransaction(
      userId,
      orgAccount,
      amount,
      null,
      'addFunds',
      session,
    );

    await session.commitTransaction();
    await session.endSession();

    return res.json(transaction);
  } catch (error) {
    return next(boom.badImplementation(error));
  }
};

module.exports = adminAddFunds;
