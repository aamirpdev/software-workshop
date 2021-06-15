import React from 'react';
import * as S from './styled';
import ButtonNew from '../../../Common/ButtonNew';
import ReportProblem from '../../../Common/ReportProblem';
import { H3, PS } from '../../../Common/Typography';

const BioReportSection = ({ bio, history, id, status }) => (
  <S.BioReportSection>
    {bio && (
      <S.BioContainer>
        <S.BioWrapper>
          <H3 color="blue" mb="2">
            Bio
          </H3>
          <PS color="gray">{bio}</PS>
        </S.BioWrapper>

        <ButtonNew
          small
          outline
          type="tertiary"
          mt="4"
          onClick={() => history.push(id)}
        >
          view profile
        </ButtonNew>
      </S.BioContainer>
    )}

    {status === 'confirmed' && (
      <S.ReportContainer>
        <ReportProblem />
      </S.ReportContainer>
    )}
  </S.BioReportSection>
);

export default BioReportSection;
