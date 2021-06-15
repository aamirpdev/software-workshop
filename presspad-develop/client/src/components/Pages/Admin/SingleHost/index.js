import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { message, Spin } from 'antd';
import { useParams } from 'react-router-dom';
import randomProfile from '../../../../assets/random-profile.jpg';
import randomListing from '../../../../assets/listing-placeholder.jpg';

import FileDownload from '../../../Common/Files/FileDownload';

import * as T from '../../../Common/Typography';
import { SectionTitle } from '../../../Common/Title';
import { Col, Row } from '../../../Common/Grid';
import * as S from './style';

import { API_ADMIN_SINGLE_HOST } from '../../../../constants/apiRoutes';

function SingleHost() {
  const [user, setUser] = useState({ profile: {}, listing: {} });
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    let mount = true;
    const getHost = async () => {
      try {
        setLoading(true);

        const { data } = await axios.get(
          API_ADMIN_SINGLE_HOST.replace(':id', id),
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
      <SectionTitle mt="8" mb="6" bgColor="pink">
        LiSTING
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
                  alt="host profile image"
                />
              </Col>
              <Col w={[4, 12, 12]} mb="5">
                <T.PBold color="blue" mb="3">
                  Photo of your home
                </T.PBold>
                <Row inner>
                  {user?.listing?.photos?.map(photo => (
                    <Col w={[4, 6, 4]} mb="3">
                      <S.ListingImage
                        src={photo?.url || randomListing}
                        onError={e => {
                          e.target.src = randomListing;
                        }}
                        alt="host profile image"
                      />
                    </Col>
                  ))}
                </Row>
              </Col>

              <Col w={[4, 4, 4]} mb="5">
                <T.PBold color="blue">Address Line 1</T.PBold>
                <T.P color="gray3">
                  {user?.listing?.address?.addressline1 || '-'}
                </T.P>
              </Col>
              <Col w={[4, 4, 4]} mb="5">
                <T.PBold color="blue">Address Line 2</T.PBold>
                <T.P color="gray3">
                  {user?.listing?.address?.addressline2 || '-'}
                </T.P>
              </Col>
              <Col w={[4, 4, 4]} mb="5">
                <T.PBold color="blue">City</T.PBold>
                <T.P color="gray3">{user?.listing?.address?.city || '-'}</T.P>
              </Col>
            </Row>
            <Row>
              <Col w={[4, 4, 4]} mb="5">
                <T.PBold color="blue">Postcode</T.PBold>
                <T.P color="gray3">
                  {user?.listing?.address?.postcode || '-'}
                </T.P>
              </Col>
              <Col w={[4, 4, 4]} mb="5">
                <T.PBold color="blue">Availability</T.PBold>
                {user.listing?.availableDates?.map(dates => (
                  <T.P color="gray3">
                    {moment(dates.startDate).format('DD/MM/YYYY')} -{' '}
                    {moment(dates.endDate).format('DD/MM/YYYY')}
                  </T.P>
                ))}
              </Col>
              <Col w={[4, 4, 4]} mb="5">
                <T.PBold color="blue">About your home & neighbourhood</T.PBold>
                {user.listing?.accommodationChecklist
                  ? user.listing?.accommodationChecklist?.map(accommodation => (
                      <T.P color="gray3" key={accommodation}>
                        - {accommodation}
                      </T.P>
                    ))
                  : '-'}
              </Col>
            </Row>

            <Row mt="7">
              <Col w={[4, 8, 8]} mb="6">
                <T.PBold color="blue">About yourself</T.PBold>
                <T.P color="gray3">{user.profile.bio || '-'}</T.P>
              </Col>

              <Col w={[4, 8, 8]} mb="6">
                <T.PBold color="blue">Other info</T.PBold>

                <T.P color="gray3">{user?.listing?.otherInfo || '-'}</T.P>
              </Col>
              <Col w={[4, 8, 8]} mb="6">
                <T.PBold color="blue">
                  Why do you want to be a PressPad host?
                </T.PBold>

                <T.P color="gray3">
                  {user?.profile?.hostingReasonAnswer || '-'}
                </T.P>
              </Col>
              <Col w={[4, 8, 8]} mb="6">
                <T.PBold color="blue">
                  What experience do you have of mentoring?
                </T.PBold>
                <T.P color="gray3">
                  {user.profile.mentoringExperienceAnswer || '-'}
                </T.P>
              </Col>
              <Col w={[4, 8, 8]} mb="6">
                <T.PBold color="blue">
                  How was your own experience of getting into the industry?
                </T.PBold>

                <T.P color="gray3">
                  {user.profile.industryExperienceAnswer || '-'}
                </T.P>
              </Col>
              <Col w={[4, 8, 8]} mb="6">
                <T.PBold color="blue">
                  Is there anything about you that would be helpful for an
                  intern to know or any preferences you might have regarding
                  those you&apos;d most like to host?
                </T.PBold>

                <T.P color="gray3">{user.profile.backgroundAnswer || '-'}</T.P>
              </Col>
            </Row>
          </S.Wrapper>
        </Col>
      </Row>

      <SectionTitle mt="8" mb="6" bgColor="blue">
        VERIFICATIONS
      </SectionTitle>
      <Row>
        <Col w={[4, 12, 12]}>
          <S.Wrapper>
            <Row>
              <Col w={[4, 12, 12]} mb="5">
                <T.H4 color="black">Job details, references and documents</T.H4>
              </Col>

              <Col w={[4, 4, 4]} mb="5">
                <T.PBold color="blue">Job title</T.PBold>
                <T.P color="gray3">{user.profile.jobTitle || '-'}</T.P>
              </Col>
              <Col w={[4, 4, 4]} mb="5">
                <T.PBold color="blue">Organisation</T.PBold>
                <T.P color="gray3">{user.profile.organisation || '-'}</T.P>
              </Col>
              <Col w={[4, 4, 4]} mb="5">
                <T.PBold color="blue">Area you work in</T.PBold>
                <T.P color="gray3">{user.profile.workingArea || '-'}</T.P>
                {user.profile.workingAreaOther && (
                  <T.P color="gray3">{user.profile.workingAreaOther}</T.P>
                )}
              </Col>
            </Row>
            <Row>
              <Col w={[4, 4, 4]} mb="5">
                <T.PBold color="blue">1. Reference name</T.PBold>
                <T.P color="gray3">{user.profile?.reference1?.name || '-'}</T.P>
              </Col>
              <Col w={[4, 4, 4]} mb="5">
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
                <T.PBold color="blue">
                  Proof that you work in the media{' '}
                </T.PBold>

                <FileDownload
                  style={{ marginBottom: '10px' }}
                  url={user.profile?.pressCard?.url}
                  fileName="Click to download"
                />
              </Col>
            </Row>
            <Row>
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
            <Row>
              <Col w={[4, 4, 4]} mb="5">
                <T.PBold color="blue">Book a video property check </T.PBold>
                <T.P color="gray3">
                  {user.profile.houseViewingDate
                    ? moment(user.profile.houseViewingDate).format('DD/MM/YYYY')
                    : '-'}
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
                <T.PBold color="blue">Schooling type</T.PBold>
                <T.P color="gray3">{user.profile.typeOfSchool || '-'}</T.P>
                {user.profile.typeOfSchoolOther && (
                  <T.P color="gray3">{user.profile.typeOfSchoolOther}</T.P>
                )}
              </Col>
              <Col w={[4, 4, 4]} mb="5">
                <T.PBold color="blue">
                  Did you receive free school meals at any point during your
                  education?
                </T.PBold>
                <T.P color="gray3">
                  {user.profile.eligibleForFreeSchoolMeals || '-'}
                </T.P>
              </Col>
              <Col w={[4, 4, 4]} mb="5">
                <T.PBold color="blue">
                  Thinking back to when you were aged about 14, which best
                  describes the sort of work the main/ highest income earner in
                  your household did in their main job?
                </T.PBold>
                <T.P color="gray3">
                  {user.profile.describeMainIncomeEarnerMainJob || '-'}
                </T.P>
              </Col>

              <Col w={[4, 4, 4]} mb="5">
                <T.PBold color="blue">
                  What is the highest level of qualifications achieved by either
                  of your parent(s) or guardian(s) by the time you were 18?
                </T.PBold>
                <T.P color="gray3">
                  {user.profile.highestLevelOfQualifications || '-'}
                </T.P>
                {user.profile.highestLevelOfQualificationsOther && (
                  <T.P color="gray3">
                    {user.profile.highestLevelOfQualificationsOther}
                  </T.P>
                )}
              </Col>
              <Col w={[4, 4, 4]} mb="5">
                <T.PBold color="blue">
                  Did either of your parents or someone in your immediate family
                  work in this industry?
                </T.PBold>
                <T.P color="gray3">
                  {user.profile.parentsWorkInPress || '-'}
                </T.P>
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

export default SingleHost;
