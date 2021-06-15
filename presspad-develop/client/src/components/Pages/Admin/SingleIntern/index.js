import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { message, Spin } from 'antd';
import { useParams } from 'react-router-dom';
import randomProfile from '../../../../assets/random-profile.jpg';

import FileDownload from '../../../Common/Files/FileDownload';

import * as T from '../../../Common/Typography';
import { SectionTitle } from '../../../Common/Title';
import { Col, Row } from '../../../Common/Grid';
import * as S from './style';

import { API_ADMIN_SINGLE_INTERN } from '../../../../constants/apiRoutes';

function SingleIntern() {
  const [user, setUser] = useState({ profile: {} });
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    let mount = true;
    const getHost = async () => {
      try {
        setLoading(true);

        const { data } = await axios.get(
          API_ADMIN_SINGLE_INTERN.replace(':id', id),
        );
        if (mount) {
          setUser(data);
          setLoading(false);
        }
      } catch (error) {
        const err = error?.response?.data?.error;
        message.error(err || 'Something went wrong');
        setLoading(false);
      }
    };

    getHost();
    return () => {
      mount = false;
    };
  }, [id]);

  if (loading) {
    return <Spin size="large" />;
  }

  return (
    <div>
      <Row>
        <Col w={[4, 12, 12]}>
          <T.H2 color="black">{user.name}</T.H2>
        </Col>
      </Row>
      <SectionTitle mt="7" mb="6" bgColor="blue">
        About
      </SectionTitle>
      <Row>
        <Col w={[4, 12, 12]}>
          <S.Wrapper>
            <Row>
              <Col w={[4, 4, 4]} mb="5">
                <T.PBold color="blue">Email</T.PBold>
                <T.P color="gray3">{user.email}</T.P>
              </Col>
              <Col w={[4, 4, 4]} mb="5">
                <T.PBold color="blue">Date of birth</T.PBold>
                <T.P color="gray3">
                  {user.profile.birthDate
                    ? moment(user.profile.birthDate).format('DD/MM/YYYY')
                    : '-'}
                </T.P>
              </Col>
              <Col w={[4, 4, 4]} mb="5">
                <T.PBold color="blue">Phone number</T.PBold>
                <T.P color="gray3">{user.profile.phoneNumber || '-'}</T.P>
              </Col>
            </Row>
            <Row>
              <Col w={[4, 4, 4]} mb="5">
                <T.PBold color="blue">Hometown</T.PBold>
                <T.P color="gray3">{user.profile.hometown}</T.P>
              </Col>
              <Col w={[4, 4, 4]} mb="5">
                <T.PBold color="blue">Subject I last studied</T.PBold>
                <T.P color="gray3">{user.profile.lastStudySubject || '-'}</T.P>
              </Col>
              <Col w={[4, 4, 4]} mb="5">
                <T.PBold color="blue">Where I last studied</T.PBold>
                <T.P color="gray3">
                  {user.profile.lastStudyUniversity || '-'}
                </T.P>
              </Col>
            </Row>
            <Row>
              <Col w={[4, 8, 8]} mb="5">
                <T.PBold color="blue">How did you hear about PressPad?</T.PBold>
                <T.P color="gray3">
                  {user.profile.hearAboutPressPadAnswer || '-'}
                </T.P>
              </Col>
            </Row>
          </S.Wrapper>
        </Col>
      </Row>
      <SectionTitle mt="8" mb="6" bgColor="blue">
        PROFILE
      </SectionTitle>
      <Row>
        <Col w={[4, 12, 12]}>
          <S.Wrapper>
            <Row>
              <Col w={[4, 12, 12]} mb="5">
                <T.PBold color="blue" mb="3">
                  Photo of you
                </T.PBold>
                <S.ProfileImage
                  src={user.profile?.profileImage?.url || randomProfile}
                  onError={e => {
                    e.target.src = randomProfile;
                  }}
                  alt="intern profile image"
                />
              </Col>
            </Row>

            <Row mt="7">
              <Col w={[4, 8, 8]} mb="6">
                <T.PBold color="blue">About yourself</T.PBold>
                <T.P color="gray3">{user.profile.bio || '-'}</T.P>
              </Col>

              <Col w={[4, 8, 8]} mb="6">
                <T.PBold color="blue">Why do you want to use PressPad?</T.PBold>

                <T.P color="gray3">{user?.profile?.useReasonAnswer || '-'}</T.P>
              </Col>
              <Col w={[4, 8, 8]} mb="6">
                <T.PBold color="blue">
                  Tell us a story about yourself that shows you have the
                  determination and dedication to enter the media profession
                </T.PBold>

                <T.P color="gray3">{user?.profile?.storyAnswer || '-'}</T.P>
              </Col>
              <Col w={[4, 8, 8]} mb="6">
                <T.PBold color="blue">
                  Describe what you are looking for in a mentor as well as your
                  long-term career ambitions
                </T.PBold>
                <T.P color="gray3">
                  {user.profile.mentorDescribeAnswer || '-'}
                </T.P>
              </Col>
              <Col w={[4, 8, 8]} mb="6">
                <T.PBold color="blue">
                  Tell us about an issue you would like to cover from your
                  hometown that you think would be of service to your community{' '}
                </T.PBold>

                <T.P color="gray3">{user.profile.issueAnswer || '-'}</T.P>
              </Col>
              <Col w={[4, 8, 8]} mb="6">
                <T.PBold color="blue">What are your areas of interest?</T.PBold>

                {user.profile?.interests?.map(interest => (
                  <T.P color="gray3" key={interest}>
                    - {interest}
                  </T.P>
                ))}
              </Col>
            </Row>
          </S.Wrapper>
        </Col>
      </Row>

      <SectionTitle mt="8" mb="6" bgColor="pink">
        VERIFICATIONS
      </SectionTitle>
      <Row>
        <Col w={[4, 12, 12]}>
          <S.Wrapper>
            <Row>
              <Col w={[4, 12, 12]} mb="5">
                <T.H4 color="black">
                  Placement details, references and documents
                </T.H4>
              </Col>

              {!user.profile?.hasNoInternship && (
                <Col w={[4, 12, 12]} mb="6" mt="2">
                  <T.H4 color="blue">This intern has no internship</T.H4>
                </Col>
              )}

              <Col w={[4, 4, 4]} mb="5">
                <T.PBold color="blue">Name of organisation</T.PBold>
                <T.P color="gray3">{user.profile.organisation || '-'}</T.P>
              </Col>
              <Col w={[4, 4, 4]} mb="5">
                <T.PBold color="blue">Contact name</T.PBold>
                <T.P color="gray3">
                  {user.profile?.internshipContact?.name || '-'}
                </T.P>
              </Col>
              <Col w={[4, 4, 4]} mb="5">
                <T.PBold color="blue">Contact email</T.PBold>
                <T.P color="gray3">
                  {user.profile?.internshipContact?.email || '-'}
                </T.P>
              </Col>
            </Row>
            <Row>
              <Col w={[4, 4, 4]} mb="5">
                <T.PBold color="blue">Contact number</T.PBold>
                <T.P color="gray3">
                  {user.profile?.internshipContact?.phoneNumber || '-'}
                </T.P>
              </Col>
              <Col w={[4, 4, 4]} mb="5">
                <T.PBold color="blue">Start date</T.PBold>

                <T.P color="gray3">
                  {user.profile?.internshipStartDate
                    ? moment(user.profile?.internshipStartDate).format(
                        'DD/MM/YYYY',
                      )
                    : '-'}
                </T.P>
              </Col>
              <Col w={[4, 4, 4]} mb="5">
                <T.PBold color="blue">End date</T.PBold>

                <T.P color="gray3">
                  {user.profile?.internshipEndDate
                    ? moment(user.profile?.internshipStartDate).format(
                        'DD/MM/YYYY',
                      )
                    : '-'}
                </T.P>
              </Col>
              <Col w={[4, 4, 4]} mb="5">
                <T.PBold color="blue">Address Line 1</T.PBold>

                <T.P color="gray3">
                  {user.profile?.internshipOfficeAddress?.addressline1 || '-'}
                </T.P>
              </Col>
              <Col w={[4, 4, 4]} mb="5">
                <T.PBold color="blue">Address Line 2</T.PBold>
                <T.P color="gray3">
                  {user.profile?.internshipOfficeAddress?.addressline2 || '-'}
                </T.P>
              </Col>

              <Col w={[4, 4, 4]} mb="5">
                <T.PBold color="blue">City</T.PBold>
                <T.P color="gray3">
                  {user.profile?.internshipOfficeAddress?.city || '-'}
                </T.P>
              </Col>

              <Col w={[4, 4, 4]} mb="8">
                <T.PBold color="blue">Postcode</T.PBold>
                <T.P color="gray3">
                  {user.profile?.internshipOfficeAddress?.postcode || '-'}
                </T.P>
              </Col>

              <Col w={[4, 4, 4]} mb="8">
                <T.PBold color="blue">Proof of internship</T.PBold>
                <FileDownload
                  style={{ marginBottom: '10px' }}
                  url={user.profile?.offerLetter?.url}
                  fileName="Click to download"
                />
              </Col>
            </Row>
            <Row mb="5">
              <Col w={[4, 4, 4]}>
                <T.PBold color="blue">1. Reference name</T.PBold>

                <T.P color="gray3">{user.profile?.reference1?.name || '-'}</T.P>
              </Col>
              <Col w={[4, 4, 4]}>
                <T.PBold color="blue">Reference email</T.PBold>

                <T.P color="gray3">
                  {user.profile?.reference1?.email || '-'}
                </T.P>
              </Col>
            </Row>

            <Row>
              <Col w={[4, 4, 4]}>
                <T.PBold color="blue">2. Reference name</T.PBold>

                <T.P color="gray3">{user.profile?.reference2?.name || '-'}</T.P>
              </Col>
              <Col w={[4, 4, 4]}>
                <T.PBold color="blue">Reference email</T.PBold>

                <T.P color="gray3">
                  {user.profile?.reference2?.email || '-'}
                </T.P>
              </Col>
            </Row>
            <Row mt="8">
              <Col w={[4, 4, 4]} mb="5">
                <T.PBold color="blue">Proof of identity </T.PBold>

                <FileDownload
                  style={{ marginBottom: '10px' }}
                  url={user.profile?.photoID?.url}
                  fileName="Click to download"
                />
              </Col>
              <Col w={[4, 4, 4]} mb="5">
                <T.PBold color="blue">DBS Certificate</T.PBold>

                <FileDownload
                  style={{ marginBottom: '10px' }}
                  url={user.profile?.DBSCheck?.url}
                  fileName="Click to download"
                />
              </Col>
              <Col w={[4, 4, 4]} mb="5">
                <T.PBold color="blue">DBS Number</T.PBold>
                <T.P color="gray3">{user.profile?.DBSCheck?.refNum || '-'}</T.P>
              </Col>
            </Row>
          </S.Wrapper>
        </Col>
      </Row>

      <SectionTitle mt="8" mb="6" bgColor="lightBlue">
        BURSARY
      </SectionTitle>
      <Row>
        <Col w={[4, 12, 12]}>
          <S.Wrapper>
            <Row>
              <Col w={[4, 6, 6]} mb="5">
                <T.PBold color="blue">
                  What type of school did you mainly attend between the ages of
                  11 and 16?
                </T.PBold>
                <T.P color="gray3">{user.bursary?.typeOfSchool || '-'}</T.P>
                {user.bursary?.typeOfSchoolOther && (
                  <T.P color="gray3">{user.bursary?.typeOfSchoolOther}</T.P>
                )}
              </Col>
              <Col w={[4, 6, 6]} mb="5">
                <T.PBold color="blue">
                  What is the highest level of qualifications achieved by either
                  of your parent(s) or guardian(s) by the time you were 18?
                </T.PBold>
                <T.P color="gray3">
                  {user.bursary?.highestLevelOfQualifications || '-'}
                </T.P>
                {user.bursary?.highestLevelOfQualificationsOther && (
                  <T.P color="gray3">
                    {user.bursary?.highestLevelOfQualificationsOther}
                  </T.P>
                )}
              </Col>
              <Col w={[4, 6, 6]} mb="5">
                <T.PBold color="blue">
                  Thinking back to when you were aged about 14, which best
                  describes the sort of work the main/ highest income earner in
                  your household did in their main job?
                </T.PBold>
                <T.P color="gray3">
                  {user.bursary?.describeMainIncomeEarnerMainJob || '-'}
                </T.P>
              </Col>
              <Col w={[4, 6, 6]} mb="5">
                <T.PBold color="blue">
                  How many people did you know before the age of 16 that work in
                  the industry you&apos;re pursuing a career in?
                </T.PBold>
                <T.P color="gray3">
                  {user.bursary?.numberOfPeopleKnowBefore16 || '-'}
                </T.P>
              </Col>

              <Col w={[4, 6, 6]} mb="5">
                <T.PBold color="blue">
                  If you attended university, what type of did you attend?
                </T.PBold>
                <T.P color="gray3">{user.bursary?.typeOfUniversity || '-'}</T.P>
              </Col>

              <Col w={[4, 6, 6]} mb="5">
                <T.PBold color="blue">
                  If you finished school after 1980, were you eligible for Free
                  School Meals at any point during your school years?{' '}
                </T.PBold>
                <T.P color="gray3">
                  {user.bursary?.eligibleForFreeSchoolMeals || '-'}
                </T.P>
              </Col>

              <Col w={[4, 6, 6]} mb="5">
                <T.PBold color="blue">
                  Compared to people in general, would you describe yourself as
                  coming from a lower socio-economic background?{' '}
                </T.PBold>
                <T.P color="gray3">{user.bursary?.typeOfUniversity || '-'}</T.P>
              </Col>

              <Col w={[4, 6, 6]} mb="5">
                <T.PBold color="blue">
                  If you finished school after 1980, were you eligible for Free
                  School Meals at any point during your school years?{' '}
                </T.PBold>
                <T.P color="gray3">
                  {user.bursary?.comingFromLowerSociolEconomicBackground || '-'}
                </T.P>
              </Col>

              <Col w={[4, 6, 6]} mb="5">
                <T.PBold color="blue">
                  Do household members speak and/or write a language other than
                  English?
                </T.PBold>
                <T.P color="gray3">
                  {user.bursary?.householdMembersSpeakOtherLanguage || '-'}
                </T.P>
                {user.bursary?.householdMembersSpeakOtherLanguageYes && (
                  <T.P color="gray3">
                    {user.bursary?.householdMembersSpeakOtherLanguage}
                  </T.P>
                )}
              </Col>

              <Col w={[4, 6, 6]} mb="5">
                <T.PBold color="blue">
                  What is your annual household income after tax?
                </T.PBold>
                <T.P color="gray3">
                  {user.bursary?.annualHouseholdIncome || '-'}
                </T.P>
              </Col>

              <Col w={[4, 6, 6]} mb="5">
                <T.PBold color="blue">What is the status of your home?</T.PBold>
                <T.P color="gray3">{user.bursary?.statusOfHome || '-'}</T.P>

                {user.bursary?.statusOfHomeOther && (
                  <T.P color="gray3">{user.bursary?.statusOfHomeOther}</T.P>
                )}
              </Col>

              <Col w={[4, 6, 6]} mb="5">
                <T.PBold color="blue">
                  How many people in your household at present receive any of
                  the following?
                </T.PBold>
                <T.P color="gray3">
                  {user.bursary?.anyHouseholdReceive || '-'}
                </T.P>
              </Col>

              <Col w={[4, 6, 6]} mb="5">
                <T.PBold color="blue">
                  Have you ever benefited from nepotism in your work life?
                </T.PBold>
                <T.P color="gray3">
                  {user.bursary?.benefitFromNepotism || '-'}
                </T.P>
              </Col>

              <Col w={[4, 6, 6]} mb="5">
                <T.PBold color="blue">
                  Have you ever benefited from nepotism in your work life?
                </T.PBold>
                <T.P color="gray3">
                  {user.bursary?.benefitFromNepotism || '-'}
                </T.P>
              </Col>

              <Col w={[4, 6, 6]} mb="5">
                <T.PBold color="blue">
                  Which of these people do you know socially?
                </T.PBold>
                <T.P color="gray3">
                  {user.bursary?.peopleYouKnowSocially || '-'}
                </T.P>
              </Col>

              <Col w={[4, 6, 6]} mb="5">
                <T.PBold color="blue">
                  Do you feel your accent affects the way potential employers
                  view you?{' '}
                </T.PBold>
                <T.P color="gray3">
                  {user.bursary?.accentAffectsPotentialEmployers || '-'}
                </T.P>
              </Col>

              <Col w={[4, 6, 6]} mb="5">
                <T.PBold color="blue">
                  Do you feel your parents are supportive of your chosen career?{' '}
                </T.PBold>
                <T.P color="gray3">
                  {user.bursary?.parentsSupportiveOfCareer || '-'}
                </T.P>
              </Col>
            </Row>
          </S.Wrapper>
        </Col>
      </Row>

      <SectionTitle mt="8" mb="6" bgColor="pink">
        DEMOGRAPHIC DETAILS
      </SectionTitle>
      <Row>
        <Col w={[4, 12, 12]}>
          <S.Wrapper>
            <Row>
              <Col w={[4, 4, 4]} mb="5">
                <T.PBold color="blue">Gender</T.PBold>
                <T.P color="gray3">{user.profile.gender || '-'}</T.P>
                {user.profile.genderOther && (
                  <T.P color="gray3">{user.profile.genderOther}</T.P>
                )}
              </Col>
              <Col w={[4, 4, 4]} mb="5">
                <T.PBold color="blue">Sexual orientation</T.PBold>
                <T.P color="gray3">{user.profile.sexualOrientation || '-'}</T.P>
              </Col>

              <Col w={[4, 4, 4]} mb="5">
                <T.PBold color="blue">Ethnicity</T.PBold>
                <T.P color="gray3">{user.profile.ethnicity || '-'}</T.P>
                {user.profile.ethnicityOther && (
                  <T.P color="gray3">{user.profile.ethnicityOther}</T.P>
                )}
              </Col>
            </Row>
            <Row>
              <Col w={[4, 4, 4]} mb="5">
                <T.PBold color="blue">Religion</T.PBold>

                <T.P color="gray3">{user.profile.religion || '-'}</T.P>
              </Col>
              <Col w={[4, 4, 4]} mb="5">
                <T.PBold color="blue">Disability</T.PBold>
                <T.P color="gray3">{user.profile.disability || '-'}</T.P>
                {user.profile.disabilityYes && (
                  <T.P color="gray3">{user.profile.disabilityYes}</T.P>
                )}
                {user.profile.disabilityYesOther && (
                  <T.P color="gray3">{user.profile.disabilityYesOther}</T.P>
                )}
              </Col>
              <Col w={[4, 4, 4]} mb="5">
                <T.PBold color="blue">Neurodivergent condition</T.PBold>
                <T.P color="gray3">{user.profile.neurodivergent || '-'}</T.P>
                {user.profile.neurodivergentYes && (
                  <T.P color="gray3">{user.profile.neurodivergentYes}</T.P>
                )}
              </Col>

              <Col w={[4, 4, 4]} mb="5">
                <T.PBold color="blue">
                  Are you a primary carer for a child or children under 18?
                </T.PBold>
                <T.P color="gray3">{user.profile.childCare || '-'}</T.P>
              </Col>
              <Col w={[4, 4, 4]} mb="5">
                <T.PBold color="blue">
                  Do you look after or care for someone with long term physical
                  or mental ill health caused by disability or age (not in a
                  paid capacity)?
                </T.PBold>
                <T.P color="gray3">{user.profile.illCare || '-'}</T.P>
              </Col>
              <Col w={[4, 4, 4]} mb="5">
                <T.PBold color="blue">Degree level</T.PBold>
                <T.P color="gray3">{user.profile.degreeLevel || '-'}</T.P>
              </Col>

              <Col w={[4, 4, 4]} mb="5">
                <T.PBold color="blue">
                  Which class do you self-identify as belonging to?
                </T.PBold>
                <T.P color="gray3">{user.profile.belongToClass || '-'}</T.P>
              </Col>
            </Row>
          </S.Wrapper>
        </Col>
      </Row>
    </div>
  );
}

export default SingleIntern;
