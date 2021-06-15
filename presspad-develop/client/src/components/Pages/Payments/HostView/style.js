import styled from 'styled-components';
import { Collapse } from 'antd';

export const Wrapper = styled.div`
  @media (max-width: ${({ theme: { size } }) => size.mobileXL}) {
    > h2 {
      font-size: 24px;
      background-color: ${({ theme }) => theme.colors.lightestGray};
      width: 116%;
      margin-left: -8%;
      padding-left: 8%;
    }
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacings[7]};

  @media (max-width: ${({ theme: { size } }) => size.tablet}) {
    margin-top: ${({ theme }) => theme.spacings[5]};
  }

  > div {
    margin-bottom: ${({ theme }) => theme.spacings[7]};

    @media (max-width: ${({ theme: { size } }) => size.tablet}) {
      width: auto;
      order: -1;
      margin-bottom: ${({ theme }) => theme.spacings[5]};
      .money-bag {
        display: none;
      }
    }
  }
`;

export const CollapseWrapper = styled(Collapse)`
  background: none;
  border-radius: 0;
  margin-bottom: ${({ theme }) => theme.spacings[7]};
  border: 0px;
  overflow: hidden;
  > * {
    border: none;
    border-bottom: none !important;
    background: none;
  }
`;

export const TableWrapper = styled.div`
  max-width: 500px;
`;

export const HeadlineWrapper = styled.div`
  background: ${({ theme }) => theme.colors.lightestGray};
  width: 100%;
  display: flex;
  height: 50px;
  align-items: center;
  margin-bottom: 1rem;
  margin-left: -10px;
  padding-left: 10px;

  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    background: none;
    margin-bottom: 2rem;
  }
`;
