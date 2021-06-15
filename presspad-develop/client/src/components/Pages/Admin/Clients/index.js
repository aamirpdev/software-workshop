import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Row, Col } from '../../../Common/Grid';
import Table from '../../../Common/Table';
import {
  LinkCol,
  StandardCol,
  PayButtonCol,
} from '../../../Common/Table/Common';
import * as T from '../../../Common/Typography';
import Notification from '../../../Common/Notification';

import {
  API_ADMIN_STATS_URL,
  API_ADMIN_ADD_FUNDS_URL,
} from '../../../../constants/apiRoutes';
import { ADMIN_SINGLE_ORG_URL } from '../../../../constants/navRoutes';

import renderExpandedSection from './renderExpandedSection';
import AddFundsModal from './AddFundsModal';

import handleError from '../../../../helpers/handleError';
import validationSchema from './validationSchema';

const { validate } = require('../../../../validation');

const { SERVER_ERROR } = require('../../../../constants/errorMessages');

const AdminClients = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [notificationOpen, setNotification] = useState(false);

  // add funds
  const [modalOpen, setModalOpen] = useState(false);
  const [orgAccount, setOrgAccount] = useState(null);
  const [amount, setAmount] = useState(0);
  const [addFundsError, setAddFundsError] = useState('');

  const fetchData = async () => {
    try {
      const data = await axios.post(API_ADMIN_STATS_URL, {
        userType: 'clients',
      });
      setClients(data.data);
      setLoading(false);
    } catch (err) {
      const msg = handleError(err);
      setError(msg);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAmountChange = e => setAmount(e.target.value);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const { errors: validationErrors } = validate({
        schema: validationSchema,
        data: { amount },
      });
      if (!validationErrors) {
        const penniesAmount = Math.floor(amount * 100);

        await axios.post(API_ADMIN_ADD_FUNDS_URL, {
          amount: penniesAmount,
          orgAccount,
        });

        setNotification(true);
        setModalOpen(false);
        setAddFundsError('');
        fetchData();
      } else {
        // validation errors
        setLoading(false);
        setAddFundsError(validationErrors);
      }
    } catch (err) {
      setLoading(false);
      if (err.response && err.response.data) {
        setAddFundsError({ serverError: err.response.data.error });
      } else {
        setAddFundsError({ serverError: SERVER_ERROR });
      }
    }
  };

  const columns = [
    LinkCol('organisation', ADMIN_SINGLE_ORG_URL, 'id'),
    StandardCol('totalPayments', 'price'),
    StandardCol('currentBalance', 'price'),
    StandardCol('interns', 'number'),
    StandardCol('currentlyHosting', 'number'),
    PayButtonCol('Funds', () => setModalOpen(true), setOrgAccount, 'addFunds'),
  ];

  return (
    <>
      <Notification
        setOpen={setNotification}
        open={notificationOpen}
        content={error || 'Changes saved'}
      />
      <AddFundsModal
        handleAmountChange={handleAmountChange}
        amount={amount}
        handleSubmit={handleSubmit}
        setModalOpen={setModalOpen}
        modalOpen={modalOpen}
        loading={loading}
        error={addFundsError}
      />
      <Row mb={6}>
        <Col w={[4, 10, 10]}>
          <T.H2 color="blue">Clients</T.H2>
        </Col>
      </Row>
      <Table
        columns={columns}
        data={clients}
        loading={loading}
        showSearch
        expandedSection={renderExpandedSection}
      />
      {error && (
        <Row>
          <T.PXS color="pink">{error}</T.PXS>
        </Row>
      )}
    </>
  );
};

export default AdminClients;
