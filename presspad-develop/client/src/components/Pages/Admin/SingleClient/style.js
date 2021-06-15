import styled from 'styled-components';

export const Wrapper = styled.div`
  box-shadow: 0px -1px 4px rgba(128, 109, 109, 0.05),
    0px 4px 4px rgba(128, 109, 109, 0.1);
  border-radius: 5px;
  padding: ${({ theme }) => theme.spacings[5]};
  padding-bottom: 0;
`;
