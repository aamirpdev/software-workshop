const { greeting, content, link } = require('../htmlTags');

module.exports = () => {
  const loginLink = link('INTERN_LOGIN', 'login');

  return `
    ${greeting('Hi there,')}
    ${content(
      `Your booking request has been confirmed! This booking does not involve payment. Please ${loginLink} to manage your booking.`,
    )}
  `;
};
