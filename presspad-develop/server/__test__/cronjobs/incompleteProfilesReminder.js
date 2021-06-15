const incompleteProfilesAfter3Weeks = require('../../helpers/cronjobs/profile/incompleteProfilesAfter3Weeks');
const buildDB = require('../../database/data/test');

let connection;

describe('Test sending profile reminder', () => {
  beforeAll(async () => {
    const { connection: _connection } = await buildDB();
    connection = _connection;
  });

  afterAll(async () => {
    await connection.close();
  });

  test('Testing', async () => {
    const res = await incompleteProfilesAfter3Weeks();
    expect(res).toBe(null);
  });
});
