import styled from 'styled-components';
import Title from '../../Common/Title';
import { P, PL, H6 } from '../../Common/Typography';

export const Container = styled.div`
  padding-right: 0px;
  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    padding-right: 100px;
  }
`;

export const TitleContainer = styled.div`
  & h2 {
    display: none;
  }
  & h3 {
    display: block;
  }
  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    & h2 {
      display: block;
    }
    & h3 {
      display: none;
    }
  }
`;

export const HeadText = styled(Title)`
  width: 100%;
  height: 50px;
  line-height: 40px;
  margin-bottom: 40px;
`;

export const SecHead = styled(HeadText)`
  background-color: ${({ theme }) => theme.colors.pink};
`;

export const DetailesContainer = styled.div`
  padding: ${({ theme }) => `${theme.spacings[6]} ${theme.spacings[5]}`};
  box-shadow: ${({ theme }) => `${theme.shadows.card}`};
  display: none;
  word-wrap: break-word !important;
  overflow-wrap: break-word;
  -ms-word-break: break-all;
  word-break: break-word;
  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    display: block;
  }
`;

export const DetailsTitle = styled(PL)`
  font-weight: 700;
`;

export const Div = styled.div`
  display: flex;
`;

export const DetailesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  & div:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacings[4]};
  }
`;

export const DetaileContent = styled(P)`
  margin-left: ${({ theme }) => theme.spacings[2]};
`;

export const DescriptionContainer = styled.div`
  box-shadow: ${({ theme }) => `${theme.shadows.card}`};
  padding: ${({ theme }) => `${theme.spacings[5]}`};
  & h3 {
    font-size: 20px;
    line-height: 25px;
  }
  & h6 {
    font-size: 16px;
    line-height: 25px;
  }
  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    & h3 {
      font-size: 30px;
      line-height: 40px;
    }
    & h6 {
      font-size: 18px;
      line-height: 27px;
    }
  }
`;

export const DescriptionContent = styled(P)`
  padding-right: ${({ theme }) => `${theme.spacings[5]}`};
`;

export const Break = styled.div`
  height: ${({ theme }) => theme.spacings[8]};
  display: none;
  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    display: block;
  }
`;

export const ContentCard = styled.div`
  width: 100%;
  box-shadow: ${({ theme }) => `${theme.shadows.card}`};
  padding: ${({ theme }) => `${theme.spacings[5]}`};
  margin-bottom: ${({ theme }) => `${theme.spacings[3]}`};
  cursor: pointer;
  word-wrap: break-word !important;
  overflow-wrap: break-word;
  -ms-word-break: break-all;
  word-break: break-word;
  & h6 {
    width: 100%;
    font-size: 16px;
    line-height: 25px;
  }
  & h5 {
    font-size: 16px;
    line-height: 25px;
  }

  & h3 {
    font-size: 20px;
    line-height: 25px;
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
    }
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    & h6 {
      width: 400px;
    }
  }
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.pink};
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    font-size: 16px;
    line-height: 25px;
  }
`;
