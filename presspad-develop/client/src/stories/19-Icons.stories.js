import React from 'react';
import Icon, { IconsArr } from '../components/Common/Icon';

export default {
  title: 'Icons',
  component: Icon,
};

export const Icons = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    {IconsArr.map(e => (
      <div style={{ display: 'flex' }}>
        <h3
          style={{
            display: 'flex',
            border: '1px solid green',
            height: 40,
            margin: '0',
            padding: '0 10px',
            lineHeight: '40px',
          }}
        >
          Icon name : {e}
        </h3>
        <div
          style={{
            display: 'flex',
            border: '1px solid green',
            height: 40,
            lineHeight: '40px',
          }}
        >
          <h3 style={{ display: 'inline', padding: '0 20px 0 10px' }}>
            {' '}
            Icon :
          </h3>
          <Icon icon={e} width="40" height="35" style={{ marginRight: 10 }} />
        </div>
      </div>
    ))}
  </div>
);
