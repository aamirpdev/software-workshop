const request = require('supertest');

const buildDB = require('../../../database/data/test');
const app = require('../../../app');
const createToken = require('../../../helpers/createToken');

// API ROUTE
const {
  API_ADMIN_SINGLE_CLIENT,
} = require('../../../../client/src/constants/apiRoutes');

let connection;
let users;
let organisations;

describe('Testing for admin get single client route', () => {
  beforeEach(async () => {
    // build dummy data
    const {
      connection: _connection,
      users: _users,
      organisations: _organisations,
    } = await buildDB();
    connection = _connection;
    users = _users;
    organisations = _organisations;
  });

  afterAll(async () => {
    await connection.close();
  });

  // tests user validation
  test('Admin is able to view all client info', async done => {
    const { adminUser, organisationUser } = users;
    const { financialTimeOrganisation } = organisations;

    const token = `token=${createToken(adminUser._id)}`;

    request(app)
      .get(API_ADMIN_SINGLE_CLIENT.replace(':id', organisationUser._id))
      .set('Cookie', [token])
      .expect(200)
      .expect('Content-Type', /json/)
      .end(async (error, response) => {
        if (error) return done(error);

        expect(response.body).toBeDefined();

        const { email, name, profile } = response.body;
        const {
          name: profileName,
          description,
          accountDetails,
          contactDetails,
          internshipOpportunities,
        } = profile[0];

        expect(email).toBe(organisationUser.email);
        expect(name).toBe(organisationUser.name);
        expect(profileName).toBe(financialTimeOrganisation.name);
        expect(description).toBe(financialTimeOrganisation.description);
        expect(accountDetails.firstName).toBe(
          financialTimeOrganisation.accountDetails.firstName,
        );
        expect(accountDetails.lastName).toBe(
          financialTimeOrganisation.accountDetails.lastName,
        );
        expect(accountDetails.phone).toBe(
          financialTimeOrganisation.accountDetails.phone,
        );
        expect(accountDetails.email).toBe(
          financialTimeOrganisation.accountDetails.email,
        );
        expect(contactDetails.phone).toBe(
          financialTimeOrganisation.contactDetails.phone,
        );
        expect(contactDetails.email).toBe(
          financialTimeOrganisation.contactDetails.email,
        );
        expect(Array.isArray(internshipOpportunities)).toBe(true);
        expect(internshipOpportunities[0].opportunity).toBe(
          financialTimeOrganisation.internshipOpportunities[0].opportunity,
        );
        expect(internshipOpportunities[0].link).toBe(
          financialTimeOrganisation.internshipOpportunities[0].link,
        );
        expect(internshipOpportunities[0].details).toBe(
          financialTimeOrganisation.internshipOpportunities[0].details,
        );

        return done();
      });
  });
});
