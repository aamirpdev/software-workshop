import styled from 'styled-components';

export const Container = styled.div`
  padding-right: 0px;
  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    padding-right: 100px;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  & h2 {
    display: none;
  }
  & h3 {
    display: block;
  }
  h6 {
    font-style: normal;
    font-weight: normal;
  }
  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    & h2 {
      display: block;
    }
    & h3 {
      display: none;
    }
    width: 85%;
  }
`;

export const AssetContainer = styled.div`
  display: none;
  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    display: flex;
    justify-content: flex-end;
    margin-top: -4rem;
  }
`;

export const OpportunityCard = styled.div`
  cursor: pointer;
  width: 100%;
  box-shadow: ${({ theme }) => theme.shadows.card};
  padding: ${({ theme }) => theme.spacings[5]};
  margin-bottom: ${({ theme }) => theme.spacings[5]};
  & h3 {
    font-size: 20px;
    line-height: 25px;
  }
  & h5 {
    font-size: 16px;
    line-height: 25px;
  }
  & h6 {
    font-size: 16px;
    line-height: 25px;
    font-style: normal;
    font-weight: normal;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    & h3 {
      font-size: 30px;
      line-height: 40px;
    }
    & h5 {
      font-size: 20px;
      line-height: 25px;
    }
    & h6 {
      font-size: 18px;
      line-height: 27px;
      font-style: normal;
      font-weight: normal;
    }
  }
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.pink};
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-decoration: underline;
  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    font-size: 18px;
    line-height: 25px;
  }
`;
