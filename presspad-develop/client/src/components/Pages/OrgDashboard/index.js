import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { message } from 'antd';

import { API_ORGS_DASHBOARD_URL } from '../../../constants/apiRoutes';

import Content from './Content';

const initState = {
  orgName: '',
  notifications: [],
  coupons: [],
  account: {},
  accountDetails: {},
  internshipOpportunities: [],
};

const OrganisationDashboard = props => {
  const [state, setState] = useState({ ...initState });
  const { windowWidth, name } = props;

  const fetchOrgData = async () => {
    try {
      const { data } = await axios.get(API_ORGS_DASHBOARD_URL);

      const [details, notifications, coupons] = data;

      const {
        account,
        name: orgName,
        accountDetails,
        internshipOpportunities,
      } = details[0];

      setState({
        orgName,
        account,
        notifications,
        coupons,
        accountDetails,
        internshipOpportunities,
      });
    } catch (err) {
      const error =
        err.response && err.response.data && err.response.data.error;
      message.error(error || 'Something went wrong');
    }
  };

  useEffect(() => {
    fetchOrgData();
  }, []);

  const {
    orgName,
    notifications,
    account,
    coupons,
    accountDetails,
    internshipOpportunities,
  } = state;

  return (
    <Content
      orgName={orgName}
      name={name}
      notifications={notifications}
      windowWidth={windowWidth}
      account={account}
      coupons={coupons}
      accountDetails={accountDetails}
      internshipOpportunities={internshipOpportunities}
    />
  );
};

export default OrganisationDashboard;
