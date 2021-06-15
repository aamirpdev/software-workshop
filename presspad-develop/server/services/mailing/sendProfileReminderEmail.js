const sendMail = require('./templates');

module.exports = async user => {
  if (user.role === 'host') {
    await sendMail({
      type: 'INCOMPLETE_PROFILE_AFTER_3_WEEKS',
      userType: 'host',
      params: { to: user.email },
    });
  }
  if (user.role === 'intern') {
    await sendMail({
      type: 'INCOMPLETE_PROFILE_AFTER_3_WEEKS',
      userType: 'intern',
      params: { to: user.email },
    });
  }
};
