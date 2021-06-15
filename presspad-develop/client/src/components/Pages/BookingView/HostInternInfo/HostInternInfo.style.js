import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacings[7]};
  margin-bottom: ${({ theme }) => theme.spacings[6]};
`;

export const BioWrapper = styled.div`
  display: ${({ userRole }) => (userRole === 'intern' ? 'block' : 'none')};
  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    display: block;
    margin-top: ${({ theme }) => theme.spacings[6]};
  }
`;

export const InfoLine = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacings[2]};

  > p,
  > div {
    width: 50%;
  }

  :last-child {
    margin-bottom: 0;
  }
`;

export const Address = styled.div`
  > p,
  > div {
    width: 50%;
  }

  :last-child {
    margin-bottom: 0;
  }
`;
