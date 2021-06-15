import React from 'react';
import { Spin } from 'antd';

import { H3, H6C, H7C, PBold } from '../../../Common/Typography';
import { Wrapper, InfoLine, Address } from './HostInternInfo.style';

const HostInternInfo = ({ info, isLoading }) => {
  const { name, role } = info;

  return (
    <Wrapper>
      {isLoading ? (
        <Spin />
      ) : (
        <>
          <H6C color="lightGray" mb="2">
            your {role}
          </H6C>
          <H3 color="blue" mb="5">
            {name}
          </H3>
          {Object.entries(info).map(([key, value]) => {
            if (key === 'role' || key === 'bio' || key === 'name' || !value) {
              return null;
            }
            if (key === 'address') {
              const { addressline1, addressline2, postcode, city } = value;
              return (
                <InfoLine key={key}>
                  <PBold
                    style={{ textTransform: 'uppercase' }}
                    color="lightGray"
                  >
                    {key}
                  </PBold>
                  <Address>
                    {addressline1 && (
                      <PBold color="darkerGray">{addressline1}</PBold>
                    )}
                    {addressline2 && (
                      <PBold color="darkerGray">{addressline2}</PBold>
                    )}
                    <PBold color="darkerGray">{`${city}, ${postcode}`}</PBold>
                  </Address>
                </InfoLine>
              );
            }
            return (
              <InfoLine key={key}>
                <PBold color="lightGray" style={{ textTransform: 'uppercase' }}>
                  {key.replace(/_/g, ' ')}
                </PBold>
                <PBold color="darkerGray">{value}</PBold>
              </InfoLine>
            );
          })}
        </>
      )}
    </Wrapper>
  );
};

export default HostInternInfo;
