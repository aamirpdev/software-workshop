import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const TabsWrapper = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacings[4]} 0;
  flex-wrap: wrap;
`;

export const Tabs = styled(NavLink)`
  color: ${({ theme }) => theme.colors.gray3};
  margin-right: ${({ theme }) => theme.spacings[5]};
  padding: 0 ${({ theme }) => theme.spacings[1]};
  margin-top: ${({ theme }) => theme.spacings[3]};
  display: flex;
  align-items: center;

  &.active {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.pink};
  }
`;

export const Label = styled.label`
  font-family: 'Sarabun', sans-serif;
  font-weight: bold;
  line-height: 25px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.blue};
  padding-left: ${({ theme }) => theme.spacings[1]};
  margin-top: ${({ theme }) => theme.spacings[4]};
  display: block;
`;

export const Error = styled.p`
  top: 100%;
  color: red;
  font-size: 12px;
  font-style: italic;
`;

export const SuccessHeaderWrapper = styled.p`
  margin-top: ${({ theme }) => theme.spacings[4]};
  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    margin-top: ${({ theme }) => theme.spacings[8]};
  }
`;

export const ChangePassword = styled.div`
  font-family: 'Sarabun', sans-serif;
  font-weight: bold;
  font-size: 1rem;
  line-height: 25px;
  cursor: pointer;
  text-decoration-line: underline;
  display: inline;
  margin-left: 12px;

  color: ${({ theme }) => theme.colors.blue};
`;

export const IllCareWrapper = styled.div`
  label,
  .helper {
    width: 100%;
    @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
      width: 200%;
    }
  }
`;

export const PageWrapper = styled.div`
  min-height: 80vh;
  position: relative;
`;

export const DeleteLink = styled.div`
  margin-top: ${({ theme }) => theme.spacings[6]};
`;

export const RightDiv = styled.div`
  width: 36%;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  background: ${({ theme }) => theme.colors.pink};
  display: none;
  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    display: block;
  }
`;

export const Container = styled.div`
  padding-right: 0;
  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    padding-right: 50%;
  }
`;
