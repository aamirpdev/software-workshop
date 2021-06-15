import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  > button {
    margin: auto;
  }
  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    min-height: 530px;
    > button {
      margin: unset;
      margin-top: auto;
      margin-right: 0;
      align-self: flex-end;
    }
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  min-height: 420px;
  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    width: 50%;
    > button {
      margin-top: ${({ theme }) => theme.spacings[5]};
      width: 195px;
    }
  }
`;

export const WarningWrapper = styled.span`
  svg {
    float: left;
    margin-right: 5px;
  }
  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
  }
`;

export const TipsWrapper = styled.div`
  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    height: ${({ height, theme }) => height || theme.spacings[3]};
  }
  > div {
    margin-top: ${({ theme }) => theme.spacings[6]};
    margin-bottom: ${({ theme }) => theme.spacings[8]};
    @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
      position: absolute;
      top: 470px;
      right: 0;
      width: 50%;
      max-width: 507px;
    }
  }
`;

export const ProfileLink = styled(Link)`
  color: ${({ theme }) => theme.colors.blue};
  font-weight: bold;
`;

export const BioWrapper = styled.div`
  display: ${({ userRole }) => (userRole === 'intern' ? 'block' : 'none')};
  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    display: block;
    margin-top: ${({ theme }) => theme.spacings[6]};
  }
`;

export const BioReportSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    justify-content: space-between;
    flex-direction: row;
  }
  padding-bottom: 100px;
`;

export const BioContainer = styled.div`
  width: 50%;
  & button {
    width: 195px;
  }
`;

export const ReportContainer = styled.div`
  width: 340px;
  height: 235px;
  margin-right: 80px;
  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    margin-right: 0px;
  }

  margin-top: 40px;
`;
