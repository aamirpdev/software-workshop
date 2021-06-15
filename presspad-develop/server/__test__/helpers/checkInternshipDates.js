const { checkInternshipDates } = require('../../helpers/general');

describe('Test checkInternshipDates', () => {
  test('should return false for startDate later than internshipStartDate', () => {
    const internshipStartDate = Date.now();
    const startDate = Date.now() + 4 * 24 * 60 * 60 * 1000;
    const internshipEndDate = Date.now() + 10 * 24 * 60 * 60 * 1000;
    const endDate = internshipEndDate;

    expect(
      checkInternshipDates({
        internshipStartDate,
        startDate,
        internshipEndDate,
        endDate,
      }),
    ).toBe(true);
  });

  test('should return true for startDate later than internshipStartDate by less than or equal 3 days ', () => {
    const internshipStartDate = Date.now();
    const startDate = Date.now() + 3 * 24 * 60 * 60 * 1000;
    const internshipEndDate = Date.now() + 10 * 24 * 60 * 60 * 1000;
    const endDate = internshipEndDate;

    expect(
      checkInternshipDates({
        internshipStartDate,
        startDate,
        internshipEndDate,
        endDate,
      }),
    ).toBe(true);
  });

  test('should return false for startDate earlier than internshipStartDate by more than or equal 4 days ', () => {
    const internshipStartDate = Date.now();
    const startDate = Date.now() - 4 * 24 * 60 * 60 * 1000;
    const internshipEndDate = Date.now() + 10 * 24 * 60 * 60 * 1000;
    const endDate = internshipEndDate;

    expect(
      checkInternshipDates({
        internshipStartDate,
        startDate,
        internshipEndDate,
        endDate,
      }),
    ).toBe(false);
  });

  test('should return true for startDate earlier than internshipStartDate by less than or equal 3 days ', () => {
    const internshipStartDate = Date.now();
    const startDate = Date.now() - 3 * 24 * 60 * 60 * 1000;
    const internshipEndDate = Date.now() + 10 * 24 * 60 * 60 * 1000;
    const endDate = internshipEndDate;

    expect(
      checkInternshipDates({
        internshipStartDate,
        startDate,
        internshipEndDate,
        endDate,
      }),
    ).toBe(true);
  });

  test('should return true for startDate later than internshipStartDate by less than or equal 3 days ', () => {
    const internshipStartDate = Date.now();
    const startDate = Date.now() + 3 * 24 * 60 * 60 * 1000;
    const internshipEndDate = Date.now() + 10 * 24 * 60 * 60 * 1000;
    const endDate = internshipEndDate;

    expect(
      checkInternshipDates({
        internshipStartDate,
        startDate,
        internshipEndDate,
        endDate,
      }),
    ).toBe(true);
  });

  test('should return false for startDate earlier than internshipStartDate by more than or equal 4 days ', () => {
    const internshipStartDate = Date.now();
    const startDate = Date.now() - 4 * 24 * 60 * 60 * 1000;
    const internshipEndDate = Date.now() + 10 * 24 * 60 * 60 * 1000;
    const endDate = internshipEndDate;

    expect(
      checkInternshipDates({
        internshipStartDate,
        startDate,
        internshipEndDate,
        endDate,
      }),
    ).toBe(false);
  });

  test('should return true for startDate earlier than internshipStartDate by less than or equal 3 days ', () => {
    const internshipStartDate = Date.now();
    const startDate = Date.now() - 3 * 24 * 60 * 60 * 1000;
    const internshipEndDate = Date.now() + 10 * 24 * 60 * 60 * 1000;
    const endDate = internshipEndDate;

    expect(
      checkInternshipDates({
        internshipStartDate,
        startDate,
        internshipEndDate,
        endDate,
      }),
    ).toBe(true);
  });

  test('should return false for endDate later than internshipEndDate by more than 3 days ', () => {
    const internshipStartDate = Date.now();
    const startDate = internshipStartDate;
    const internshipEndDate = Date.now() + 10 * 24 * 60 * 60 * 1000;
    const endDate = internshipEndDate + 4 * 24 * 60 * 60 * 1000;

    expect(
      checkInternshipDates({
        internshipStartDate,
        startDate,
        internshipEndDate,
        endDate,
      }),
    ).toBe(false);
  });

  test('should return true for endDate later than internshipEndDate by less than or equal 3 days ', () => {
    const internshipStartDate = Date.now();
    const startDate = internshipStartDate;
    const internshipEndDate = Date.now() + 10 * 24 * 60 * 60 * 1000;
    const endDate = internshipEndDate + 3 * 24 * 60 * 60 * 1000;

    expect(
      checkInternshipDates({
        internshipStartDate,
        startDate,
        internshipEndDate,
        endDate,
      }),
    ).toBe(true);
  });

  test('should return true for endDate earlier than internshipEndDate', () => {
    const internshipStartDate = Date.now();
    const startDate = internshipStartDate;
    const internshipEndDate = Date.now() + 10 * 24 * 60 * 60 * 1000;
    const endDate = internshipEndDate - 4 * 24 * 60 * 60 * 1000;

    expect(
      checkInternshipDates({
        internshipStartDate,
        startDate,
        internshipEndDate,
        endDate,
      }),
    ).toBe(true);
  });

  test('should return true for endDate earlier than internshipEndDate by less than or equal 3 days ', () => {
    const internshipStartDate = Date.now();
    const startDate = internshipStartDate;
    const internshipEndDate = Date.now() + 10 * 24 * 60 * 60 * 1000;
    const endDate = internshipEndDate - 3 * 24 * 60 * 60 * 1000;

    expect(
      checkInternshipDates({
        internshipStartDate,
        startDate,
        internshipEndDate,
        endDate,
      }),
    ).toBe(true);
  });

  test('should return false for endDate before startDate', () => {
    const internshipStartDate = Date.now();
    const startDate = Date.now();
    const internshipEndDate = Date.now() - 10 * 24 * 60 * 60 * 1000;
    const endDate = Date.now() - 10 * 24 * 60 * 60 * 1000;

    expect(
      checkInternshipDates({
        internshipStartDate,
        startDate,
        internshipEndDate,
        endDate,
      }),
    ).toBe(false);
  });
});
