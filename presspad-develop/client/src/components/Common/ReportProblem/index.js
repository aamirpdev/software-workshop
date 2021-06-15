import React, { useState } from 'react';
import * as S from './styled';
import ButtonNew from '../ButtonNew';
import Icon from '../Icon';

import { P, PBold } from '../Typography';

const ReportProblem = () => {
  const [isopen, setIsOpen] = useState(false);

  const {
    REACT_APP_ADMIN_REPORT_EMAIL,
    REACT_APP_ADMIN_REPORT_PHONE,
  } = process.env;

  return isopen ? (
    <S.Wrapper>
      <PBold mb="10px">Report a problem</PBold>
      <P mb={3} color="gray3">
        If the issue is urgent or of a criminal nature please call the emergency
        services first. For anything else, the wellbeing and enjoyment of our
        hosts and interns is our primary concern. Do drop us a call or an email
        using the information below.
      </P>
      <S.IconWrapper>
        <Icon icon="phone" width="16" height="16" />
        <S.EmailLink
          rel="noopener noreferrer"
          target="_blank"
          href={`tel:${REACT_APP_ADMIN_REPORT_PHONE}`}
        >
          {REACT_APP_ADMIN_REPORT_PHONE}
        </S.EmailLink>
      </S.IconWrapper>
      <S.IconWrapper>
        <Icon
          icon="emailFill"
          height="16"
          width="16"
          style={{ alignSelf: 'center' }}
        />
        <S.EmailLink
          rel="noopener noreferrer"
          target="_blank"
          href={`mailto:?subject=&body=${REACT_APP_ADMIN_REPORT_EMAIL}`}
        >
          {REACT_APP_ADMIN_REPORT_EMAIL}
        </S.EmailLink>
      </S.IconWrapper>
    </S.Wrapper>
  ) : (
    <S.Wrapper>
      <PBold mb="10px">Report a problem</PBold>
      <P mb={4} color="gray3">
        If you believe there has been any issues or inappropriate behaviour
        during your stay and would like to alert, report or receive support from
        the PressPad team, please click below.
      </P>
      <ButtonNew small type="primary" onClick={() => setIsOpen(true)}>
        report problem
      </ButtonNew>
    </S.Wrapper>
  );
};

export default ReportProblem;
