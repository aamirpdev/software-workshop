import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const CardWrapper = styled.div`
  .StripeElement {
    margin: 1.5rem 2rem;
    padding: 0.5rem;
    border-radius: 0.2rem;
    box-shadow: ${({ theme }) => theme.shadows.card};
    background-color: ${({ theme }) => theme.colors.white};
    border: ${({ theme }) => theme.borders.stripeBorder};
  }
  .StripeElement--focus {
    box-shadow: ${({ theme }) => theme.shadows.stripeBorder};
  }
  .StripeElement--invalid {
    border: ${({ theme }) => theme.borders.error};
    box-shadow: none;
  }
`;

export const PaymentModalTitle = styled.h2`
  font-weight: 800;
  font-size: 1.5rem;
  text-align: center;
  margin: 1rem 0 2rem 0;
  color: ${({ theme }) => theme.colors.blue};

`;

export const InfoMessage = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
`;

export const AddCoupon = styled.p`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacings[2]};
`;

export const Link = styled(RouterLink)`
  font-size: 14px;
`;

export const SuccessMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`