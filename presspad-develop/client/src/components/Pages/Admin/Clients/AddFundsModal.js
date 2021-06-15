import React from 'react';
import Modal from '../../../Common/Modal';
import { Input } from '../../../Common/Inputs';
import ButtonNew from '../../../Common/ButtonNew';

import { Row, Col } from '../../../Common/Grid';
import * as T from '../../../Common/Typography';

const ApproveRejectModal = ({
  setModalOpen,
  modalOpen,
  loading,
  handleAmountChange,
  amount,
  handleSubmit,
  error,
}) => (
  <>
    <Modal
      visible={modalOpen}
      onCancel={() => setModalOpen(false)}
      title="ADD FUNDS"
      hideOkButton
      content={
        <>
          <Row>
            <Col w={[4, 12, 12]}>
              <T.PXS mb={2} mt={4}>
                Please make sure you have enough funds in your PressPad account
              </T.PXS>
            </Col>
          </Row>
          <Row mb={5}>
            <Col w={[4, 12, 5.4]}>
              <Input
                onChange={handleAmountChange}
                name="amount"
                label="Amount"
                placeholder="£..."
                type="number"
                value={amount}
                error={error.amount}
              />
            </Col>
          </Row>

          <Row mb={2} mt={4}>
            <Col w={[4, 6, 6]}>
              <ButtonNew
                type="secondary"
                onClick={handleSubmit}
                loading={loading}
              >
                Submit
              </ButtonNew>
            </Col>
          </Row>
          {error.serverError && (
            <Row>
              <T.PXS color="pink">{error.serverError}</T.PXS>
            </Row>
          )}
        </>
      }
    />
  </>
);

export default ApproveRejectModal;
