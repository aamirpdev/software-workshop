const { greeting, content } = require('../htmlTags');

module.exports = params => {
  return `
    ${greeting('Hi there,')}
    ${content(
      `We’re delighted to tell you that ${params.internName} has found somewhere to stay from ${params.startDate} to ${params.endDate} during their internship with you.`,
    )}
  `;
};
