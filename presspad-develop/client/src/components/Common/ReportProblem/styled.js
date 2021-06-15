import styled, { keyframes } from 'styled-components';
import { H8 } from '../Typography';

const FadeInDown = keyframes`
0% { 
    opacity: 0; 
} 
100% { 
    opacity: 1; 
} 
`;

export const Wrapper = styled.div`
  width: 100%;
  padding-right: ${({ theme }) => theme.spacings[2]};
  & button {
    width: 160px;
  }
  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    padding-right: ${({ theme }) => theme.spacings[7]};
  }
`;

export const CardHead = styled(H8)`
  font-family: 'Sarabun';
  font-style: normal;
  font-weight: 600;
`;

export const Card = styled.div`
  width: 95%;
  box-shadow: ${({ theme }) => theme.shadows.card};
  border-radius: 4px;
  padding: ${({ theme: { spacings } }) => `${spacings[4]}`};

  animation: ${FadeInDown} 0.8s linear;
  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    width: 100%;
  }
`;

export const ButtonWrraper = styled.div`
  width: 50%;
`;

export const EmailLink = styled.a`
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.blue};
  font-weight: 600;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;
