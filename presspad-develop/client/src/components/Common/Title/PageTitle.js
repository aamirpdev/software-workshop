import React from 'react';
import * as T from '../Typography';
import { MOBILE_M_WIDTH } from '../../../constants/screenWidths';
import * as S from './style';

const PageTitle = ({ children, windowWidth, inner, color = 'blue' }) => {
  const Heading = windowWidth > MOBILE_M_WIDTH ? T.H2 : T.H3;

  return (
    <S.PageTitleWrapper inner={inner}>
      <Heading caps color={color}>
        {children}
      </Heading>
    </S.PageTitleWrapper>
  );
};

export default PageTitle;
