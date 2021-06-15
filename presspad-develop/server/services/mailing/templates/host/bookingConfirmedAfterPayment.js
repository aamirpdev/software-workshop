const { greeting, content, link } = require('../htmlTags');

module.exports = params => {
  const loginLink = link('HOST_LOGIN', 'login');

  return `
    ${greeting('Hi there,')}
    ${content(
      `The booking with ${params.internName} has now been confirmed! Please ${loginLink} to manage your booking and get in contact with your new guest ahead of their stay.`,
    )}
  `;
};
