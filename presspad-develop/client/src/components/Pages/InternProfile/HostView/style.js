import styled from 'styled-components';
import { colors } from '../../../../theme';

export const Wrapper = styled.div`
  box-shadow: 0px -1px 4px rgba(128, 109, 109, 0.05),
    0px 4px 4px rgba(128, 109, 109, 0.1);
  border-radius: 5px;
  padding: ${({ theme }) => theme.spacings[5]};
  padding-bottom: 0;
`;

export const ProfileImage = styled.img`
  width: 180px;
  height: 180px;
  overflow: hidden;
  border-radius: 50%;
`;

export const Symbol = styled.div`
  left: 0px;
  margin-right: 5px;
  width: 30px;
  height: 30px;
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-position: center center;
`;

export const SymbolDiv = styled.div`
  display: flex;
  @media (max-width: 575.98px) {
    flex-direction: column;
  }
`;

export const SymbolContainer = styled.div`
  display: flex;
  margin-right: 15px;
`;

export const SymbolHeadline = styled.h3`
  font-weight: 300;
  margin-right: 5px;
  font-size: 16px;
  text-align: left;
  color: ${colors.fontLightBlack};
  line-height: 2;
`;

export const IconDiv = styled.div`
  line-height: 2.1;
  opacity: 0.5;
`;
