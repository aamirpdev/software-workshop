import React from 'react';
import moment from 'moment';
import { Spin } from 'antd';
import randomProfile from '../../../../assets/random-profile.jpg';
import FileDownload from '../../../Common/Files/FileDownload';
import * as T from '../../../Common/Typography';
import { SectionTitle } from '../../../Common/Title';
import { Col, Row } from '../../../Common/Grid';
import * as S from './style';
import { SETTINGS } from '../../../../constants/navRoutes';

function InternView({ loading, user }) {
  if (loading) {
    return <Spin size="large" />;
  }

  return (
    <div>
      <Row>
        <S.EditButton to={SETTINGS.EDIT_PROFILE}>Edit Profile</S.EditButton>
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
      <Row>
        <Col w={[4, 12, 12]}>
          <S.Wrapper>
            <Row>
              <Col w={[4, 12, 12]} mb="5">
                <T.H4 color="black">
                  Placement details, references and documents
                </T.H4>
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
    </div>
  );
}

export default InternView;
