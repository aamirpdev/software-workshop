/* eslint-disable global-require */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { message, Spin } from 'antd';
import axios from 'axios';
import randomProfile from '../../../../assets/random-profile.jpg';
import * as T from '../../../Common/Typography';
import { SectionTitle } from '../../../Common/Title';
import { Col, Row } from '../../../Common/Grid';
import Reviews from '../../../Common/Reviews';
import * as S from './style';
import { API_INTERN_PROFILE_URL } from '../../../../constants/apiRoutes';
import referIcon from '../../../../assets/refer.svg';
import verifiedIcon from '../../../../assets/verified.svg';

function HostView() {
  const [user, setUser] = useState({ profile: {} });
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    let mount = true;
    const getIntern = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          API_INTERN_PROFILE_URL.replace(':id', id),
        );
        if (mount) {
          setUser(data);
          setIsLoading(false);
        }
      } catch (error) {
        const err = error?.response?.data?.error;
        message.error(err || 'Something went wrong');
        setIsLoading(false);
      }
    };

    getIntern();
    return () => {
      mount = false;
    };
  }, [id]);

  if (isLoading) return <Spin size="large" />;

  return (
    <div>
      <Row>
        <S.SymbolDiv>
          {user.profile.verified ? (
            <S.SymbolContainer>
              <S.Symbol src={verifiedIcon} />
              <S.SymbolHeadline>Verified</S.SymbolHeadline>
            </S.SymbolContainer>
          ) : (
            <S.SymbolContainer>
              <S.Symbol src={verifiedIcon} />
              <S.SymbolHeadline>Not Verified</S.SymbolHeadline>
            </S.SymbolContainer>
          )}
          <S.SymbolContainer>
            <S.Symbol src={referIcon} />
            <S.SymbolHeadline>{user.referencesNum} References</S.SymbolHeadline>
          </S.SymbolContainer>
        </S.SymbolDiv>
      </Row>
      <Row mt="5">
        <Col w={[4, 12, 12]} mb="5">
          <S.ProfileImage
            src={user.profile?.profileImage?.url || randomProfile}
            onError={e => {
              e.target.src = randomProfile;
            }}
            alt="intern profile image"
          />
        </Col>
      </Row>
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

      <SectionTitle mt="7" mb="6" bgColor="blue">
        Reviews
      </SectionTitle>
      <Row>
        <Col w={[4, 12, 12]} mt="-2">
          <S.Wrapper>
            <div style={{ marginTop: '-4rem', paddingBottom: '2rem' }}>
              <Reviews userId={user._id} name={user.name} userRole="intern" />
            </div>
          </S.Wrapper>
        </Col>
      </Row>
    </div>
  );
}

export default HostView;
