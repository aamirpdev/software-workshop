import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  box-shadow: 0px -1px 4px rgba(128, 109, 109, 0.05),
    0px 4px 4px rgba(128, 109, 109, 0.1);
  border-radius: 5px;
  padding: ${({ theme }) => theme.spacings[5]};
  padding-bottom: 0;
`;

export const ProfileImage = styled.img`
  width: 180px;
  height: 180px;
  overflow: hidden;
  border-radius: 50%;
`;

export const EditButton = styled(Link)`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  color: #0ac7e7;
  padding: 7px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  margin-top: 2rem;
  margin-right: 2rem;
  margin-left: auto;
  display: block;
  width: 110px;
  text-align: center;
`;
