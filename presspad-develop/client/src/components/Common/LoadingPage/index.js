import React from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoadingPage = props => (
  <LoadingContainer>
    <Spin {...props} />
  </LoadingContainer>
);

export default LoadingPage;
