import React from 'react';
import Title, {
  SectionTitle as SectionTitleComponent,
} from '../components/Common/Title';

export default {
  title: 'Title',
};

export const TitleComponent = () => (
  <div style={{ width: 600 }}>
    <Title>Welcome to the PressPad Movement!</Title>
  </div>
);

export const Title2Component = () => (
  <div style={{ width: 600 }}>
    <Title>this is just to test Title component</Title>
  </div>
);

export const TitleWithBackground = () => (
  <div style={{ width: 600, paddingLeft: '7vw' }}>
    <Title withBg>GET VERIFIED</Title>
  </div>
);

export const SectionTitle = () => (
  <SectionTitleComponent bgColor="blue">GET VERIFIED</SectionTitleComponent>
);

export const SectionTitleLong = () => (
  <SectionTitleComponent bgColor="blue">
    INTERNSHIP OPPORTUNITIES
  </SectionTitleComponent>
);

export const SectionTitleWithMargins = () => (
  <SectionTitleComponent bgColor="pink" mt="5" mb="3">
    GET VERIFIED
  </SectionTitleComponent>
);
