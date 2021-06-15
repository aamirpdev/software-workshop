import React from 'react';

import * as T from '../../../Common/Typography';
import { Row, Col } from '../../../Common/Grid';

import { formatPrice } from '../../../../helpers';

const renderExpandedSection = (rowData, index) => {
  const {
    email,
    name,
    contactNumber,
    currentBursaryStatus,
    previousBursaries,
    totalBursaryCost,
    latestOrganisationDiscount,
    totalOrganisationCost,
  } = rowData;
  return (
    <>
      <Row mb={2}>
        <Col w={[4, 3, 3]}>
          <T.PXSBold color="darkGray">Contact Name</T.PXSBold>
          <T.PXS color="darkGray">{name || 'N/A'}</T.PXS>
        </Col>
        <Col w={[4, 3, 3]}>
          <T.PXSBold color="darkGray">Email address</T.PXSBold>
          <T.Link light color="lightBlue" isExternal to={`mailto:${email}`}>
            {email || 'N/A'}
          </T.Link>
        </Col>
        <Col w={[4, 3, 3]}>
          <T.PXSBold color="darkGray">Current Bursary Status</T.PXSBold>
          <T.PXS color="darkGray">
            {currentBursaryStatus ? 'Applying' : 'Not Applying'}
          </T.PXS>
        </Col>
        <Col w={[4, 3, 3]}>
          <T.PXSBold color="darkGray">Latest Organisation Discount</T.PXSBold>
          <T.PXS color="darkGray">{latestOrganisationDiscount || 'N/A'}</T.PXS>
        </Col>
      </Row>
      <Row mb={2}>
        <Col w={[4, 3, 3]} />
        <Col w={[4, 3, 3]}>
          <T.PXSBold color="darkGray">Contact Number</T.PXSBold>
          <T.Link
            light
            color="lightBlue"
            isExternal
            to={`tel:${contactNumber}`}
          >
            {contactNumber || 'N/A'}
          </T.Link>
        </Col>
        <Col w={[4, 3, 3]}>
          <T.PXSBold color="darkGray">Previous Bursaries</T.PXSBold>
          <T.PXS color="darkGray">{previousBursaries || 0}</T.PXS>
        </Col>
        <Col w={[4, 3, 3]}>
          <T.PXSBold color="darkGray">Total Organisation Cost</T.PXSBold>
          <T.PXS color="darkGray">£{formatPrice(totalOrganisationCost)}</T.PXS>
        </Col>
      </Row>
      <Row>
        <Col w={[4, 3, 3]} />
        <Col w={[4, 3, 3]} />
        <Col w={[4, 3, 3]}>
          <T.PXSBold color="darkGray">Total Bursary Cost</T.PXSBold>
          <T.PXS color="darkGray">£{formatPrice(totalBursaryCost)}</T.PXS>
        </Col>
      </Row>
    </>
  );
};

export default renderExpandedSection;
