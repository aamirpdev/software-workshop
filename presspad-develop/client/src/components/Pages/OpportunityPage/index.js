import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { message, Spin } from 'antd';
import { useHistory, useParams, useLocation } from 'react-router-dom';
import queryString from 'query-string';

import * as S from './styled';

import { Row, Col } from '../../Common/Grid';
import GoBack from '../../Common/GoBack';
import * as T from '../../Common/Typography';

import { API_SINGLE_OPPORTUNITY_URL } from '../../../constants/apiRoutes';
import { OPPORTUNITY_URL } from '../../../constants/navRoutes';

const OpportunityPage = () => {
  const history = useHistory();
  const { id } = useParams();
  const { search } = useLocation();
  const { key } = queryString.parse(search);

  const [loading, setLoading] = useState(true);
  const [opportunity, setOpportunity] = useState({});

  useEffect(() => {
    let mount = true;
    async function fetchData() {
      try {
        setLoading(true);

        const url = API_SINGLE_OPPORTUNITY_URL.replace(':id', id);
        const { data } = await axios.get(`${url}?key=${key}`);
        if (mount) {
          setOpportunity(data);
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
  }, [id, key]);

  const {
    contactDetails = {},
    description,
    internshipOpportunities = [],
    name,
  } = opportunity;

  return (
    <S.Container>
      {loading ? (
        <Spin size="large" />
      ) : (
        <>
          <Row>
            <Col w={[4, 12, 12]}>
              <GoBack onClick={() => history.goBack()} />
            </Col>
          </Row>
          <Row>
            <Col w={[4, 12, 12]}>
              <S.TitleContainer>
                {/* desktop */}
                <T.H2 mt={6} mb={7}>
                  {name || 'N/A'}
                </T.H2>
                {/* mobile */}
                <T.H3 mt={4} mb={6}>
                  {name || 'N/A'}
                </T.H3>
              </S.TitleContainer>
            </Col>
          </Row>
          <Row>
            <Col w={[4, 12, 5]}>
              <S.HeadText section>COMPANY DETAILS</S.HeadText>
            </Col>
          </Row>
          <Row>
            <Col w={[4, 12, 7]}>
              <S.DescriptionContainer>
                <S.DetailsTitle mb={3}>Description</S.DetailsTitle>
                <S.DescriptionContent color="gray" mt={2} mb={3}>
                  {description || 'N/A'}
                </S.DescriptionContent>
              </S.DescriptionContainer>
            </Col>
            <Col w={[4, 12, 5]}>
              <S.DetailesContainer>
                <S.DetailsTitle mb={3}>Contact Details</S.DetailsTitle>
                <S.DetailesWrapper>
                  <S.Div>
                    <T.H6C color="lightGray">CONTACT NAME</T.H6C>
                    <S.DetaileContent>
                      {contactDetails.name || 'N/A'}
                    </S.DetaileContent>
                  </S.Div>
                  <S.Div>
                    <T.H6C color="lightGray">CONTACT EMAIL</T.H6C>
                    <a href={`mailto:${contactDetails.email}`}>
                      <S.DetaileContent>
                        {contactDetails.email || 'N/A'}
                      </S.DetaileContent>
                    </a>
                  </S.Div>
                  <S.Div>
                    <T.H6C color="lightGray">CONTACT NUMBER</T.H6C>
                    <S.DetaileContent>
                      {contactDetails.phone || 'N/A'}
                    </S.DetaileContent>
                  </S.Div>
                </S.DetailesWrapper>
              </S.DetailesContainer>
            </Col>
          </Row>
          <S.Break />
          <Row>
            <Col w={[4, 12, 5]}>
              <S.SecHead section>Internship opportunities</S.SecHead>
            </Col>
          </Row>
          <Row>
            {internshipOpportunities.map(opp => (
              <Col w={[4, 12, 6]}>
                <S.ContentCard
                  onClick={() =>
                    history.push(
                      // the id of the organisation
                      `${OPPORTUNITY_URL.replace(':id', id)}?key=${opp.key}`,
                    )
                  }
                >
                  <T.H5 caps>{opp.opportunity || 'N/A'}</T.H5>
                  <T.P color="gray" mt={2} mb={3}>
                    {opp.details || 'N/A'}
                  </T.P>
                  <S.Link
                    onClick={e => e.stopPropagation()}
                    target="_blank"
                    href={opp.link || '#'}
                  >
                    {opp.link || 'N/A'}
                  </S.Link>
                </S.ContentCard>
              </Col>
            ))}
          </Row>
        </>
      )}
    </S.Container>
  );
};

export default OpportunityPage;
