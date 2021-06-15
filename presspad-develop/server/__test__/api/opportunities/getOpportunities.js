const request = require('supertest');

const buildDB = require('../../../database/data/test');
const app = require('../../../app');
const createToken = require('../../../helpers/createToken');

const {
  API_OPPORTUNITIES_URL,
  API_SINGLE_OPPORTUNITY_URL,
} = require('../../../../client/src/constants/apiRoutes');

let connection;
let users;
let organisations;

describe('Testing for intern get opportunities/opportunity', () => {
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

  test('Intern able to view all opportunities', async done => {
    const { internUser } = users;
    const { financialTimeOrganisation } = organisations;
    const [
      internshipOpportunity,
    ] = financialTimeOrganisation.internshipOpportunities;

    const token = `token=${createToken(internUser._id)}`;

    request(app)
      .get(API_OPPORTUNITIES_URL)
      .set('Cookie', [token])
      .expect(200)
      .expect('Content-Type', /json/)
      .end(async (error, response) => {
        if (error) return done(error);

        expect(response.body).toBeDefined();
        expect(Array.isArray(response.body)).toBe(true);
        const { _id, orgName, key, name, link, details } = response.body[0];
        expect(_id).toBe(financialTimeOrganisation._id.toString());
        expect(orgName).toBe(financialTimeOrganisation.name);
        expect(key).toBe(internshipOpportunity.key);
        expect(name).toBe(internshipOpportunity.opportunity);
        expect(link).toBe(internshipOpportunity.link);
        expect(details).toBe(internshipOpportunity.details);

        return done();
      });
  });

  test('Intern able to view single opportunity - (org profile)', async done => {
    const { internUser, organisationUser } = users;
    const { financialTimeOrganisation } = organisations;
    const {
      internshipOpportunities: [{ key }],
    } = financialTimeOrganisation;

    const token = `token=${createToken(internUser._id)}`;

    request(app)
      .get(
        `${API_SINGLE_OPPORTUNITY_URL.replace(
          ':id',
          organisationUser.organisation,
        )}?key=${key}`,
      )
      .set('Cookie', [token])
      .expect(200)
      .expect('Content-Type', /json/)
      .end(async (error, response) => {
        if (error) return done(error);

        expect(response.body).toBeDefined();

        const {
          name,
          description,
          contactDetails,
          internshipOpportunity,
        } = response.body;
        const {
          details,
          link,
          opportunity,
          key: newKey,
        } = internshipOpportunity;

        expect(name).toBe(financialTimeOrganisation.name);
        expect(description).toBe(financialTimeOrganisation.description);
        // fix dummy data
        // expect(contactDetails.name).toBe(
        //   financialTimeOrganisation.contactDetails.name,
        // );
        expect(contactDetails.phone).toBe(
          financialTimeOrganisation.contactDetails.phone,
        );
        expect(contactDetails.email).toBe(
          financialTimeOrganisation.contactDetails.email,
        );
        expect(opportunity).toBe(
          financialTimeOrganisation.internshipOpportunities[0].opportunity,
        );
        expect(link).toBe(
          financialTimeOrganisation.internshipOpportunities[0].link,
        );
        expect(details).toBe(
          financialTimeOrganisation.internshipOpportunities[0].details,
        );
        expect(newKey).toBe(
          financialTimeOrganisation.internshipOpportunities[0].key,
        );

        return done();
      });
  });
});
