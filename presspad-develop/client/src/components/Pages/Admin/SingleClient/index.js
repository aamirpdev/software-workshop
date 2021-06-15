import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { message, Spin } from 'antd';

import * as T from '../../../Common/Typography';
import { Col, Row } from '../../../Common/Grid';
import { SectionTitle } from '../../../Common/Title';

import * as S from './style';
import { API_ADMIN_SINGLE_CLIENT } from '../../../../constants/apiRoutes';

function AdminSingleClient() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [clientData, setClientData] = useState({});

  useEffect(() => {
    let mount = true;
    const url = API_ADMIN_SINGLE_CLIENT.replace(':id', id);
    async function fetchData() {
      try {
        setLoading(true);
        const { data } = await axios.get(url);
        if (mount) {
          setClientData(data);
          setLoading(false);
        }
      } catch (error) {
        const err = error.response.data && error.response.data.error;
        message.error(err || 'Something went wrong');
        setLoading(false);
      }
    }
    fetchData();
    return () => {
      mount = false;
    };
  }, [id]);

  const { email, name, profile = [{}] } = clientData;
  const {
    description,
    internshipOpportunities = [],
    contactDetails = {},
    accountDetails = {},
  } = profile[0];

  return loading ? (
    <Spin size="large" />
  ) : (
    <>
      <Row>
        <Col w={[4, 12, 12]}>
          <T.H2 mb="7">{name || 'N/A'}</T.H2>
        </Col>
      </Row>
      <SectionTitle bgColor="darkBlue" mb="6">
        About
      </SectionTitle>
      <Row>
        <Col w={[4, 12, 12]}>
          <S.Wrapper>
            <Row>
              <Col w={[4, 4, 4]} mb="5">
                <T.PBold color="blue">Email</T.PBold>
                <T.P color="gray3">{email || 'N/A'}</T.P>
              </Col>
              <Col w={[4, 4, 4]} mb="5">
                <T.PBold color="blue">First name</T.PBold>
                <T.P color="gray3">{accountDetails.firstName || 'N/A'}</T.P>
              </Col>
              <Col w={[4, 4, 4]} mb="5">
                <T.PBold color="blue">Last name</T.PBold>
                <T.P color="gray3">{accountDetails.lastName || 'N/A'}</T.P>
              </Col>
              <Col w={[4, 4, 4]} mb="5">
                <T.PBold color="blue">Contact number...</T.PBold>
                <T.P color="gray3">{accountDetails.phone || 'N/A'}</T.P>
              </Col>
              <Col w={[4, 4, 4]} mb="5">
                <T.PBold color="blue">Contact email address...</T.PBold>
                <T.P color="gray3">{accountDetails.email || 'N/A'}</T.P>
              </Col>
            </Row>
          </S.Wrapper>
        </Col>
      </Row>
      <SectionTitle bgColor="pink" mb="6" mt="8">
        Profile
      </SectionTitle>
      <Row>
        <Col w={[4, 12, 12]}>
          <S.Wrapper>
            <Row>
              <Col w={[4, 12, 8]} mb="5">
                <T.PBold color="blue">Description</T.PBold>
                <T.P color="gray3">{description || 'N/A'}</T.P>
              </Col>
            </Row>
            <Row>
              <Col w={[4, 12, 12]}>
                <T.H4 mb="6">Internship Opportunities</T.H4>
              </Col>
            </Row>
            {internshipOpportunities.map(
              ({ _id, opportunity, link, details }) => (
                <Row key={_id}>
                  <Col w={[4, 6, 4]} mb="5">
                    <T.PBold color="blue">Opportunity</T.PBold>
                    <T.P color="gray3">{opportunity || 'N/A'}</T.P>
                  </Col>
                  <Col w={[4, 6, 4]} mb="5">
                    <T.PBold color="blue">Link</T.PBold>
                    <a
                      href={link || '#'}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <T.P color="gray3">{link || 'N/A'}</T.P>
                    </a>
                  </Col>
                  <Col w={[4, 12, 8]} mb="7">
                    <T.PBold color="blue">Details</T.PBold>
                    <T.P color="gray3">{details || 'N/A'}</T.P>
                  </Col>
                </Row>
              ),
            )}
            <Row>
              <Col w={[4, 12, 12]}>
                <T.H4 mb="6">Contact details</T.H4>
              </Col>
            </Row>
            <Row>
              <Col w={[4, 6, 4]} mb="5">
                <T.PBold color="blue">Contact name</T.PBold>
                <T.P color="gray3">{contactDetails.name || 'N/A'}</T.P>
              </Col>
              <Col w={[4, 6, 4]} mb="5">
                <T.PBold color="blue">Contact email</T.PBold>
                <T.P color="gray3">{contactDetails.email || 'N/A'}</T.P>
              </Col>
              <Col w={[4, 6, 4]} mb="8">
                <T.PBold color="blue">Contact number</T.PBold>
                <T.P color="gray3">{contactDetails.phone || 'N/A'}</T.P>
              </Col>
            </Row>
          </S.Wrapper>
        </Col>
      </Row>
    </>
  );
}

export default AdminSingleClient;
