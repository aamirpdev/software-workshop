const { greeting, content } = require('../htmlTags');

module.exports = () => {
  return `
    ${greeting('Hi there,')}
    ${content(
      `We’re sorry to inform you that your booking has been cancelled because you didn't confirm in time.`,
    )}
  `;
};
