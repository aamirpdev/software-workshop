import styled from 'styled-components';

export const BioWrapper = styled.div`
  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    margin-top: ${({ theme }) => theme.spacings[6]};
  }
  margin-bottom: ${({ theme }) => theme.spacings[4]};
`;

export const BioReportSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 100px;
`;

export const BioContainer = styled.div`
  width: 100%;
  & button {
    width: 195px;
  }
  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    width: 50%;
  }
`;

export const ReportContainer = styled.div`
  height: 235px;
  margin-right: 80px;
  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    margin-right: 0px;
    width: 50%;
  }

  margin-top: 60px;
`;
