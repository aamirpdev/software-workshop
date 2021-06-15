const { greeting, content } = require('../htmlTags');

module.exports = () => {
  return `
  ${greeting('Hi there,')}
  ${content(
    `The booking with your intern is now confirmed. As the booking period is 2 weeks or less there is no payment involved.`,
  )}
  `;
};
