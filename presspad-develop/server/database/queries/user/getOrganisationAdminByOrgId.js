const { User } = require('../../models');

module.exports = organisationId =>
  User.findOne({ organisation: organisationId, role: 'organisation' });
