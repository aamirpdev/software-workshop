const { User } = require('../../models');

module.exports = id => {
  return User.findById(id).select({ respondingTime: 1, respondedRequests: 1 });
};
