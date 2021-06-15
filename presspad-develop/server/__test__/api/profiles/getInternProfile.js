const request = require('supertest');

const buildDB = require('../../../database/data/test/index');
const app = require('../../../app');
const createToken = require('../../../helpers/createToken');

let connection;
let users;

describe("Tests get intern's profile data", () => {
  beforeAll(async () => {
    // build dummy data
    const { connection: _connection, users: _users } = await buildDB();
    connection = _connection;
    users = _users;
  });

  afterAll(async () => {
    await connection.close();
  });

  test('tests get Intern profile successfully', async done => {
    const { internUser } = users;
    // Request should get the intern profile
    // the profileImage must contain a url
    // from google cloud
    const token = `token=${createToken(internUser._id)}`;
    console.log('token', token);
    request(app)
      .get(`/api/interns/${internUser._id}/profile`)
      .set('Cookie', [token])
      .expect(200)
      .expect('Content-Type', /json/)
      .end(async (err, res) => {
        if (err) return done(err);
        expect(res).toBeDefined();
        expect(res.body).toBeDefined();
        expect(res.body.name).toBeDefined();
        expect(res.body._id).toBeDefined();
        expect(res.body.profile).toBeDefined();
        return done();
      });
  });
});
