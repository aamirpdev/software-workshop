import styled from 'styled-components';
import { Collapse } from 'antd';
import { Link as RouterLink } from 'react-router-dom';

export const Wrapper = styled.div`
  @media (max-width: ${({ theme: { size } }) => size.mobileXL}) {
    > h2 {
      font-size: 24px;
      background-color: ${({ theme }) => theme.colors.lightestGray};
      width: 116%;
      margin-left: -8%;
      padding-left: 8%;
    }
  }
`;

export const CollapseWrapper = styled(Collapse)`
  background: none;
  border-radius: 0;
  border: 0px;
  overflow: hidden;
  margin-left: -10px;
  > * {
    border: none;
    border-bottom: none !important;
    background: none;
  }
`;

export const Link = styled(RouterLink)`
  font-size: 14px;
  display: block;
  color: ${({ theme }) => theme.colors.lightBlue};
`;

export const ShowMore = styled.button`
  margin-top: -${({ theme }) => theme.spacings[4]};
  margin-bottom: ${({ theme }) => theme.spacings[6]};
  cursor: pointer;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.lightBlue};
  font-size: 14px;
  display: block;
  :focus,
  :active {
    border: none;
    outline: none;
  }
`;

export const HeadlineWrapper = styled.div`
  background: ${({ theme }) => theme.colors.lightestGray};
  width: 100%;
  display: flex;
  height: 50px;
  align-items: center;
  margin-bottom: 1rem;
  margin-left: -10px;
  padding-left: 10px;

  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    background: none;
    margin-bottom: 2rem;
  }
`;
