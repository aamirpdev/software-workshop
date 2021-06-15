import React, { Component } from 'react';
import { Skeleton, message } from 'antd';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import InternView from './InternView';
import HostView from './HostView';
import { PageWrapper, HeaderWrapper } from '../../Common/general';

import { Error404 } from '../../../constants/navRoutes';
import {
  API_GET_BOOKING_URL,
  API_REVIEW_BY_BOOKING,
} from '../../../constants/apiRoutes';

export default class InternProfile extends Component {
  state = {
    isLoading: true,
    bookingInfo: {},
    bookingReviews: [],
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const getBookingUrl = API_GET_BOOKING_URL.replace(
      ':id',
      this.props.match.params.id,
    );
    const reviewURL = API_REVIEW_BY_BOOKING.replace(
      ':id',
      this.props.match.params.id,
    );

    try {
      const {
        data: { data: bookingInfo },
      } = await axios.get(getBookingUrl);
      const { data: bookingReviews } = await axios.get(reviewURL);
      this.setState({ bookingInfo, bookingReviews, isLoading: false });
    } catch (error) {
      message.error('Something went wrong, pls try again later');
      this.props.history.push('/500');
    }
  }

  render() {
    const { isLoading, bookingInfo, bookingReviews } = this.state;
    const { role } = this.props;

    if (isLoading) {
      return (
        <PageWrapper>
          <HeaderWrapper>
            <Skeleton active avatar={{ size: 160, shape: 'square' }} />
          </HeaderWrapper>
        </PageWrapper>
      );
    }

    switch (role) {
      case 'intern':
        return (
          <InternView
            {...this.props}
            bookingInfo={bookingInfo}
            bookingReviews={bookingReviews}
          />
        );

      case 'host':
        return (
          <HostView
            {...this.props}
            bookingInfo={bookingInfo}
            bookingReviews={bookingReviews}
          />
        );

      default:
        return <Redirect to={Error404} />;
    }
  }
}
