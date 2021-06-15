const { greeting, content, link } = require('../htmlTags');

module.exports = () => {
  const loginLink = link('HOST_LOGIN', 'login');

  return `
    ${greeting('Hi there,')}
    ${content(
      `Your booking request has been confirmed! Please ${loginLink} to manage your booking and get in touch with your host before your stay.`,
    )}
  `;
};
