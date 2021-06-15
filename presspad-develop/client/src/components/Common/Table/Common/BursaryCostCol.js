import React from 'react';

import * as T from '../../Typography';
import camelToWords from '../../../../helpers/camelToWords';
import { formatPrice } from '../../../../helpers';

const decideText = data => {
  if (data.bursaryTransaction) {
    return `£${formatPrice(data.bursaryTransaction.amount)}`;
  }
  if (data.approvedBursary && !data.bursaryTransaction) {
    if (data.status === 'confirmed') {
      return '£0';
    }
    return 'TBC';
  }
  return 'N/A';
};

const BursaryCostCol = colTitle => ({
  title: camelToWords(colTitle),
  dataIndex: colTitle,
  key: colTitle,
  sorter: (a, b) => a[colTitle].localeCompare(b[colTitle]),
  className: 'standardCol',
  render: (text, rowData) => (
    <>
      <div style={{ display: 'flex' }}>
        <T.PXS
          color="black"
          style={{
            textTransform: 'capitalize',
          }}
        >
          {decideText(rowData)}
        </T.PXS>
      </div>
    </>
  ),
});

export default BursaryCostCol;
