import styled from 'styled-components';

export const SectionTitleWrapper = styled.div`
  background-color: ${({ theme, bgColor }) =>
    theme.colors[bgColor] || bgColor || theme.colors.pink};
  padding: ${({ theme }) => `${theme.spacings[2]} ${theme.spacings[5]}`};
  width: 100%;
`;

export const PageTitleWrapper = styled.div`
  background-color: ${({ theme, bgColor }) =>
    theme.colors[bgColor] || bgColor || theme.colors.lightestGray};
  padding: ${({ theme }) => theme.spacings[2]};
  padding-right: ${({ theme }) => theme.spacings[6]};
  width: calc(100% + 20px);
  margin-bottom: ${({ theme }) => theme.spacings[5]};

  // % based on the sidemenu layout spacings + 1% for smooth link with menu
  margin-left: ${({ inner }) => (inner ? `-8%` : `-4%`)};
  padding-left: ${({ inner }) => (inner ? `8%` : `4%`)};

  @media ${({ theme }) => theme.breakpoints.mobileL} {
    width: auto;
    margin-left: ${({ inner }) => (inner ? `-16%` : `-8%`)};
    padding-left: ${({ inner }) => (inner ? `16%` : `8%`)};
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: auto;
    margin-left: ${({ inner }) => (inner ? `-10%` : `-5%`)};
    padding-left: ${({ inner }) => (inner ? `10%` : `5%`)};
    display: inline-block;
  }

  @media ${({ theme }) => theme.breakpoints.laptop} {
    width: auto;
    margin-left: ${({ inner }) => (inner ? `-12%` : `-6%`)};
    padding-left: ${({ inner }) => (inner ? `12%` : `6%`)};
  }

  @media ${({ theme }) => theme.breakpoints.laptopL} {
    width: auto;
    margin-left: ${({ inner }) => (inner ? `-16%` : `-8%`)};
    padding-left: ${({ inner }) => (inner ? `16%` : `8%`)};
  }
`;
