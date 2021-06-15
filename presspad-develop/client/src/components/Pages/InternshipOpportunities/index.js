import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { message, Spin } from 'antd';

import { useHistory } from 'react-router-dom';
import { ReactComponent as Book } from '../../../assets/book.svg';
import { OPPORTUNITY_URL } from '../../../constants/navRoutes';

import * as S from './styled';

import { Row, Col } from '../../Common/Grid';
import Title from '../../Common/Title';
import * as T from '../../Common/Typography';

import { API_OPPORTUNITIES_URL } from '../../../constants/apiRoutes';

const InternshipOpportunities = ({ windowWidth }) => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [opportunities, setOpportunities] = useState([]);

  useEffect(() => {
    let mount = true;
    async function fetchData() {
      try {
        setLoading(true);
        const { data } = await axios.get(API_OPPORTUNITIES_URL);
        if (mount) {
          setOpportunities(data);
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
  }, []);

  return (
    <S.Container>
      {loading ? (
        <Spin size="large" />
      ) : (
        <>
          <Title color="blue" pageTitle windowWidth={windowWidth}>
            Internship Opportunities
          </Title>
          <Row>
            <Col
              w={[4, 12, 8]}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <S.TitleContainer>
                <T.H6 color="gray" mb={6}>
                  Information about internships: Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna lorem ipsum dolor sit amet
                </T.H6>
              </S.TitleContainer>
            </Col>
            <Col w={[4, 12, 4]}>
              <S.AssetContainer>
                <Book />
              </S.AssetContainer>
            </Col>
          </Row>
          <Row>
            {opportunities.map(({ _id, key, orgName, name, details, link }) => (
              <Col w={[4, 12, 6]} key={_id + key}>
                <S.OpportunityCard
                  onClick={() =>
                    history.push(
                      `${OPPORTUNITY_URL.replace(':id', _id)}?key=${key}`,
                    )
                  }
                >
                  <T.H3>{name}</T.H3>
                  <T.H5 caps mt={2} color="blue" mb={5}>
                    {orgName}
                  </T.H5>
                  <T.H6 color="gray" mt={2} mb={3}>
                    {details}
                  </T.H6>
                  <S.Link
                    onClick={event => {
                      event.stopPropagation();
                    }}
                    target="_blank"
                    href={link}
                  >
                    {link}
                  </S.Link>
                </S.OpportunityCard>
              </Col>
            ))}
          </Row>
        </>
      )}
    </S.Container>
  );
};

export default InternshipOpportunities;
