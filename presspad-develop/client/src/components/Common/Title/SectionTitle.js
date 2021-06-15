import React from 'react';
import * as T from '../Typography';

import * as S from './style';
import { Row, Col } from '../Grid';
import { MOBILE_L_WIDTH } from '../../../constants/screenWidths';
import { withWindowWidth } from '../../../HOCs';

function SectionTitle({
  bgColor,
  children,
  w,
  windowWidth,
  m,
  mt,
  mtT,
  mtM,
  mb,
  mbT,
  mbM,
  ml,
  mlT,
  mlM,
  mr,
  mrT,
  mrM,
}) {
  const isMobile = windowWidth < MOBILE_L_WIDTH;

  return (
    <Row
      m={m}
      mt={mt}
      mtT={mtT}
      mtM={mtM}
      mb={mb}
      mbT={mbT}
      mbM={mbM}
      ml={ml}
      mlT={mlT}
      mlM={mlM}
      mr={mr}
      mrT={mrT}
      mrM={mrM}
    >
      <Col
        w={w || [4, 8, 5]}
        style={{ padding: isMobile ? 0 : undefined, minWidth: 'fit-content' }}
      >
        <S.SectionTitleWrapper bgColor={bgColor}>
          <T.H4C color="white">{children}</T.H4C>
        </S.SectionTitleWrapper>
      </Col>
    </Row>
  );
}

export default withWindowWidth(SectionTitle);
