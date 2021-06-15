import React, { useEffect, useState } from 'react';
import moment from 'moment';
import axios from 'axios';
import { Link } from 'react-router-dom';

import * as S from '../style';

import { Row, Col } from '../../Grid';
import * as T from '../../Typography';

import { Badge, BlueSpan } from '../../general';
import LoadingBallPulseSync from '../../LoadingBallPulseSync';
import { calculateHostRespondingTime } from '../../../../helpers';
import { API_HOST_RESPONSE_TIME_URL } from '../../../../constants/apiRoutes';

const timeCol = [1, 2, 4];
const updateCol = [3, 8, 8];

const Update = ({ item, userRole, profileCompleted }) => {
  const {
    type,
    secondParty,
    createdAt,
    seen,
    booking,
    loading,
    seenForOrg = false,
    user = {},
  } = item;

  const timeString = createdAt ? moment(createdAt).format('DD MMM YY') : 'N/A';

  const [hostRespondingTime, setRespondingTime] = useState(null);

  useEffect(() => {
    let mounted = true;

    async function getResponseTime(hostId) {
      const { data } = await axios.get(
        API_HOST_RESPONSE_TIME_URL.replace(':id', hostId),
      );

      const { respondingTime, respondedRequests } = data;
      const resTime = calculateHostRespondingTime(
        respondingTime,
        respondedRequests,
      );

      if (mounted) {
        setRespondingTime(resTime);
      }
    }

    if (userRole === 'intern' && type === 'stayRequest') {
      getResponseTime(secondParty._id);
    }
    return () => {
      mounted = false;
    };
  }, [secondParty, type, userRole]);

  switch (userRole) {
    case 'intern':
      switch (type) {
        case 'welcome':
          return (
            <S.UpdateLink
              to={profileCompleted ? `/hosts` : `/sign-up/intern/about-me`}
            >
              <Row mb={3}>
                <Col w={timeCol}>
                  <i>{timeString}</i>
                </Col>
                {profileCompleted ? (
                  <Col w={updateCol}>
                    Thanks for signing up. As soon as our team approve your
                    profile you will be able to request to stay with hosts
                  </Col>
                ) : (
                  <Col w={updateCol}>
                    Welcome! Finish signing up to start using PressPad
                  </Col>
                )}
              </Row>
            </S.UpdateLink>
          );

        case 'profileApproved':
          return (
            <S.UpdateLink to="/hosts">
              <Row mb={3}>
                <Col w={timeCol}>
                  <i>{timeString}</i>
                </Col>
                <Col w={updateCol}>
                  Great news! Your profile has been approved. Now you can find
                  hosts to stay with!
                </Col>
              </Row>
            </S.UpdateLink>
          );

        case 'stayRejected':
          return (
            <S.UpdateLink to={`/booking/${booking}`}>
              <Row mb={3}>
                <Col w={timeCol}>
                  <i>{timeString}</i>
                </Col>
                <Col w={updateCol}>
                  Your request to stay with&nbsp;
                  <Link to={`/hosts/${secondParty._id}`}>
                    <BlueSpan>{secondParty.name}</BlueSpan>
                  </Link>
                  &nbsp;has been rejected
                  {!seen && !loading && <Badge>new</Badge>}
                  {loading && !seen && <LoadingBallPulseSync />}
                </Col>
              </Row>
            </S.UpdateLink>
          );

        case 'stayApproved':
          return (
            <S.UpdateLink to={`/booking/${booking}`}>
              <Row mb={3}>
                <Col w={timeCol}>
                  <i>{timeString}</i>
                </Col>
                <Col w={updateCol}>
                  Good news! Your booking with&nbsp;
                  <Link to={`/hosts/${secondParty._id}`}>
                    <BlueSpan>{secondParty.name}</BlueSpan>
                  </Link>
                  &nbsp; is complete. Click here to view details
                  {!seen && !loading && <Badge>new</Badge>}
                  {loading && !seen && <LoadingBallPulseSync />}
                </Col>
              </Row>
            </S.UpdateLink>
          );

        case 'stayAccepted':
          return (
            <S.UpdateLink to={`/booking/${booking}`}>
              <Row mb={3}>
                <Col w={timeCol}>
                  <i>{timeString}</i>
                </Col>
                <Col w={updateCol}>
                  Your booking request with &nbsp;
                  <Link to={`/hosts/${secondParty._id}`}>
                    <BlueSpan>{secondParty.name}</BlueSpan>
                  </Link>
                  &nbsp; has been accepted! Click here to pay and complete the
                  booking
                  {!seen && !loading && <Badge>new</Badge>}
                  {loading && !seen && <LoadingBallPulseSync />}
                </Col>
              </Row>
            </S.UpdateLink>
          );

        case 'stayCompleted':
          return (
            <S.UpdateLink to={`/booking/${booking}`}>
              <Row mb={3}>
                <Col w={timeCol}>
                  <i>{timeString}</i>
                </Col>
                <Col w={updateCol}>
                  Your stay with&nbsp;
                  <Link to={`/hosts/${secondParty._id}`}>
                    <BlueSpan>{secondParty.name}</BlueSpan>
                  </Link>
                  &nbsp;has been completed
                  {!seen && !loading && <Badge>new</Badge>}
                  {loading && !seen && <LoadingBallPulseSync />}
                </Col>
              </Row>
            </S.UpdateLink>
          );

        case 'completeProfileRemind':
          return (
            <S.UpdateLink to="/my-profile">
              <Row mb={3}>
                <Col w={timeCol}>
                  <i>{timeString}</i>
                </Col>
                <Col w={updateCol}>
                  You’re so close to completing your profile! Just add a few
                  more fields
                  {!seen && !loading && <Badge>new</Badge>}
                  {loading && !seen && <LoadingBallPulseSync />}
                </Col>
              </Row>
            </S.UpdateLink>
          );

        case 'getReview':
          return (
            <S.UpdateLink to={`/booking/${booking}`}>
              <Row mb={3}>
                <Col w={timeCol}>
                  <i>{timeString}</i>
                </Col>
                <Col w={updateCol}>
                  You have received a new review from&nbsp;
                  <BlueSpan>{secondParty.name}</BlueSpan>
                  {!seen && !loading && <Badge>new</Badge>}
                  {loading && !seen && <LoadingBallPulseSync />}
                </Col>
              </Row>
            </S.UpdateLink>
          );

        case 'giveReviewReminder':
          return (
            <S.UpdateLink to={`/review-info/${booking}`}>
              <Row mb={3}>
                <Col w={timeCol}>
                  <i>{timeString}</i>
                </Col>
                <Col w={updateCol}>
                  Please leave a review for&nbsp;
                  <BlueSpan>{secondParty.name}</BlueSpan>
                  {!seen && !loading && <Badge>new</Badge>}
                  {loading && !seen && <LoadingBallPulseSync />}
                </Col>
              </Row>
            </S.UpdateLink>
          );

        case 'cancelledBeforePayments':
          return (
            <S.UpdateLink to={`/booking/${booking}`}>
              <Row mb={3}>
                <Col w={timeCol}>
                  <i>{timeString}</i>
                </Col>
                <Col w={updateCol}>
                  Booking with&nbsp;
                  <BlueSpan>{secondParty.name}</BlueSpan>&nbsp;cancelled. View
                  booking
                  {!seen && !loading && <Badge>new</Badge>}
                  {loading && !seen && <LoadingBallPulseSync />}
                </Col>
              </Row>
            </S.UpdateLink>
          );

        case 'requestCancelAfterPayments':
          return (
            <S.UpdateLink to={`/booking/${booking}`}>
              <Row mb={3}>
                <Col w={timeCol}>
                  <i>{timeString}</i>
                </Col>
                <Col w={updateCol}>
                  Cancel request received. We are reviewing your request now.
                  View booking
                  {!seen && !loading && <Badge>new</Badge>}
                  {loading && !seen && <LoadingBallPulseSync />}
                </Col>
              </Row>
            </S.UpdateLink>
          );

        case 'cancelledAfterPayments':
          return (
            <S.UpdateLink to={`/booking/${booking}`}>
              <Row mb={3}>
                <Col w={timeCol}>
                  <i>{timeString}</i>
                </Col>
                <Col w={updateCol}>
                  Booking with&nbsp;
                  <BlueSpan>{secondParty.name}</BlueSpan>&nbsp;cancelled. View
                  booking
                  {!seen && !loading && <Badge>new</Badge>}
                  {loading && !seen && <LoadingBallPulseSync />}
                </Col>
              </Row>
            </S.UpdateLink>
          );

        case 'paymentIsDue':
          return (
            <S.UpdateLink to={`/booking/${booking}`}>
              <Row mb={3}>
                <Col w={timeCol}>
                  <i>{timeString}</i>
                </Col>
                <Col w={updateCol}>
                  Payment with&nbsp;
                  <BlueSpan>{secondParty.name}</BlueSpan>&nbsp;is due. Pay here
                  {!seen && !loading && <Badge>new</Badge>}
                  {loading && !seen && <LoadingBallPulseSync />}
                </Col>
              </Row>
            </S.UpdateLink>
          );

        case 'paymentOverDue':
          return (
            <S.UpdateLink to={`/booking/${booking}`}>
              <Row mb={3}>
                <Col w={timeCol}>
                  <i>{timeString}</i>
                </Col>
                <Col w={updateCol}>
                  URGENT! Payment with&nbsp;
                  <BlueSpan>{secondParty.name}</BlueSpan>&nbsp;is now 7 days
                  overdue. Pay here to avoid your stay being terminated
                  {!seen && !loading && <Badge>new</Badge>}
                  {loading && !seen && <LoadingBallPulseSync />}
                </Col>
              </Row>
            </S.UpdateLink>
          );

        case 'bookingTerminated':
          return (
            <S.UpdateLink to={`/booking/${booking}`}>
              <Row mb={3}>
                <Col w={timeCol}>
                  <i>{timeString}</i>
                </Col>
                <Col w={updateCol}>
                  Unfortunately due to lack of payment this booking has been
                  terminated. View booking
                  {!seen && !loading && <Badge>new</Badge>}
                  {loading && !seen && <LoadingBallPulseSync />}
                </Col>
              </Row>
            </S.UpdateLink>
          );

        case 'stayRequest':
          return (
            <S.UpdateLink to={`/booking/${booking}`}>
              <Row mb={3}>
                <Col w={timeCol}>
                  <i>{timeString}</i>
                </Col>
                <Col w={updateCol}>
                  Booking request received.{' '}
                  <Link to={`/host/${secondParty._id}`}>
                    <BlueSpan>{secondParty.name}</BlueSpan>
                  </Link>{' '}
                  is reviewing your request and will typically reply within{' '}
                  {hostRespondingTime || <LoadingBallPulseSync />} days{' '}
                  {!seen && !loading && <Badge>new</Badge>}
                  {loading && !seen && <LoadingBallPulseSync />}
                </Col>
              </Row>
            </S.UpdateLink>
          );

        default:
          return null;
      }
    case 'host':
      switch (type) {
        case 'welcome':
          return (
            <S.UpdateLink
              to={profileCompleted ? `/settings` : `/sign-up/host/about-me`}
            >
              <Row mb={3}>
                <Col w={timeCol}>
                  <i>{timeString}</i>
                </Col>
                {profileCompleted ? (
                  <Col w={updateCol}>
                    Thanks for finishing your profile! Once we carry out the
                    video property check and review your details, we will put
                    your listing live
                  </Col>
                ) : (
                  <Col w={updateCol}>
                    Welcome! Finish signing up to start using PressPad
                  </Col>
                )}
              </Row>
            </S.UpdateLink>
          );

        case 'profileApproved':
          return (
            <Row mb={3}>
              <Col w={timeCol}>
                <i>{timeString}</i>
              </Col>
              <Col w={updateCol}>
                Great news! Your profile has been approved. Soon you&apos;ll
                host your first intern, exciting!
              </Col>
            </Row>
          );

        case 'stayRequest':
          return (
            <S.UpdateLink to={`/booking/${booking}`}>
              <Row mb={3}>
                <Col w={timeCol}>
                  <i>{timeString}</i>
                </Col>
                <Col w={updateCol}>
                  You have a booking request! View details and respond here
                  {!seen && !loading && <Badge>new</Badge>}
                  {loading && !seen && <LoadingBallPulseSync />}
                </Col>
              </Row>
            </S.UpdateLink>
          );

        case 'stayApproved':
          return (
            <S.UpdateLink to={`/booking/${booking}`}>
              <Row mb={3}>
                <Col w={timeCol}>
                  <i>{timeString}</i>
                </Col>
                <Col w={updateCol}>
                  Good news! {secondParty.name}&apos;s booking is confirmed.
                  Click here to view details
                  {!seen && !loading && <Badge>new</Badge>}
                  {loading && !seen && <LoadingBallPulseSync />}
                </Col>
              </Row>
            </S.UpdateLink>
          );

        case 'stayAccepted':
          return (
            <S.UpdateLink to={`/booking/${booking}`}>
              <Row mb={3}>
                <Col w={timeCol}>
                  <i>{timeString}</i>
                </Col>
                <Col w={updateCol}>
                  You have accepted the booking request from {secondParty.name}.
                  They now have 48 hours to confirm.
                  {!seen && !loading && <Badge>new</Badge>}
                  {loading && !seen && <LoadingBallPulseSync />}
                </Col>
              </Row>
            </S.UpdateLink>
          );

        case 'stayCompleted':
          return (
            <S.UpdateLink to={`/booking/${booking}`}>
              <Row mb={3}>
                <Col w={timeCol}>
                  <i>{timeString}</i>
                </Col>
                <Col w={updateCol}>
                  <Link to={`/interns/${secondParty._id}`}>
                    <BlueSpan>{secondParty.name}</BlueSpan>
                  </Link>{' '}
                  &nbsp;has completed his stay with you
                  {!seen && !loading && <Badge>new</Badge>}
                  {loading && !seen && <LoadingBallPulseSync />}
                </Col>
              </Row>
            </S.UpdateLink>
          );

        case 'completeProfileRemind':
          return (
            <S.UpdateLink to="/my-profile">
              <Row mb={3}>
                <Col w={timeCol}>
                  <i>{timeString}</i>
                </Col>
                <Col w={updateCol}>
                  You’re so close to completing your profile! Just add a few
                  more fields
                  {!seen && !loading && <Badge>new</Badge>}
                  {loading && !seen && <LoadingBallPulseSync />}
                </Col>
              </Row>
            </S.UpdateLink>
          );

        case 'getReview':
          return (
            <S.UpdateLink to={`/booking/${booking}`}>
              <Row mb={3}>
                <Col w={timeCol}>
                  <i>{timeString}</i>
                </Col>
                <Col w={updateCol}>
                  You have received a new review from&nbsp;
                  <BlueSpan>{secondParty.name}</BlueSpan>
                  {!seen && !loading && <Badge>new</Badge>}
                  {loading && !seen && <LoadingBallPulseSync />}
                </Col>
              </Row>
            </S.UpdateLink>
          );

        case 'giveReviewReminder':
          return (
            <S.UpdateLink to={`/review-info/${booking}`}>
              <Row mb={3}>
                <Col w={timeCol}>
                  <i>{timeString}</i>
                </Col>
                <Col w={updateCol}>
                  Please leave a review for&nbsp;
                  <BlueSpan>{secondParty.name}</BlueSpan>&nbsp;
                  {!seen && !loading && <Badge>new</Badge>}
                  {loading && !seen && <LoadingBallPulseSync />}
                </Col>
              </Row>
            </S.UpdateLink>
          );

        case 'cancelledBeforePayments':
          return (
            <S.UpdateLink to={`/booking/${booking}`}>
              <Row mb={3}>
                <Col w={timeCol}>
                  <i>{timeString}</i>
                </Col>
                <Col w={updateCol}>
                  Booking with&nbsp;
                  <BlueSpan>{secondParty.name}</BlueSpan>&nbsp;cancelled. View
                  booking
                  {!seen && !loading && <Badge>new</Badge>}
                  {loading && !seen && <LoadingBallPulseSync />}
                </Col>
              </Row>
            </S.UpdateLink>
          );

        case 'requestCancelAfterPayments':
          return (
            <S.UpdateLink to={`/booking/${booking}`}>
              <Row mb={3}>
                <Col w={timeCol}>
                  <i>{timeString}</i>
                </Col>
                <Col w={updateCol}>
                  Cancel request received. We are reviewing your request now.
                  View booking
                  {!seen && !loading && <Badge>new</Badge>}
                  {loading && !seen && <LoadingBallPulseSync />}
                </Col>
              </Row>
            </S.UpdateLink>
          );

        case 'cancelledAfterPayments':
          return (
            <S.UpdateLink to={`/booking/${booking}`}>
              <Row mb={3}>
                <Col w={timeCol}>
                  <i>{timeString}</i>
                </Col>
                <Col w={updateCol}>
                  Booking with&nbsp;
                  <BlueSpan>{secondParty.name}</BlueSpan>&nbsp;cancelled. View
                  booking
                  {!seen && !loading && <Badge>new</Badge>}
                  {loading && !seen && <LoadingBallPulseSync />}
                </Col>
              </Row>
            </S.UpdateLink>
          );

        case 'paymentIsDue':
          return (
            <S.UpdateLink to={`/booking/${booking}`}>
              <Row mb={3}>
                <Col w={timeCol}>
                  <i>{timeString}</i>
                </Col>
                <Col w={updateCol}>
                  Payment with&nbsp;
                  <BlueSpan>{secondParty.name}</BlueSpan>&nbsp;is due. View
                  booking
                  {!seen && !loading && <Badge>new</Badge>}
                  {loading && !seen && <LoadingBallPulseSync />}
                </Col>
              </Row>
            </S.UpdateLink>
          );

        case 'paymentOverDue':
          return (
            <S.UpdateLink to={`/booking/${booking}`}>
              <Row mb={3}>
                <Col w={timeCol}>
                  <i>{timeString}</i>
                </Col>
                <Col w={updateCol}>
                  URGENT! Payment with&nbsp;
                  <BlueSpan>{secondParty.name}</BlueSpan>&nbsp;is now 7 days
                  overdue. View booking
                  {!seen && !loading && <Badge>new</Badge>}
                  {loading && !seen && <LoadingBallPulseSync />}
                </Col>
              </Row>
            </S.UpdateLink>
          );

        case 'bookingTerminated':
          return (
            <S.UpdateLink to={`/booking/${booking}`}>
              <Row mb={3}>
                <Col w={timeCol}>
                  <i>{timeString}</i>
                </Col>
                <Col w={updateCol}>
                  Unfortunately due to lack of payment this booking has been
                  terminated. View booking
                  {!seen && !loading && <Badge>new</Badge>}
                  {loading && !seen && <LoadingBallPulseSync />}
                </Col>
              </Row>
            </S.UpdateLink>
          );

        default:
          return null;
      }
    case 'org':
      switch (type) {
        case 'welcome':
          return (
            <Row mb={3}>
              <Col w={timeCol}>
                <i>{timeString}</i>
              </Col>
              <Col w={updateCol}>
                Welcome to PressPad! If you have any issues always feel free to
                contact our team
              </Col>
            </Row>
          );

        case 'stayApproved':
          return (
            <Row mb={3}>
              <Col w={timeCol}>
                <T.PXS>
                  <i>{timeString}</i>
                </T.PXS>
              </Col>
              <Col w={updateCol}>
                <T.PXS>
                  <strong>{user.name}</strong> has matched with
                  <Link to={`/host/${secondParty._id}`}>
                    <BlueSpan> {secondParty.name}</BlueSpan>
                  </Link>
                </T.PXS>
                {!seenForOrg && !loading && <Badge>new</Badge>}
                {loading && !seenForOrg && <LoadingBallPulseSync />}
              </Col>
            </Row>
          );

        case 'getReview':
          return (
            <Row mb={3}>
              <Col w={timeCol}>
                <T.PXS>
                  <i>{timeString}</i>
                </T.PXS>
              </Col>
              <Col w={updateCol}>
                <T.PXS>
                  <strong>{user.name}</strong> has received a new review
                </T.PXS>
                {!seenForOrg && !loading && <Badge>new</Badge>}
                {loading && !seenForOrg && <LoadingBallPulseSync />}
              </Col>
            </Row>
          );

        case 'stayCompleted':
          return (
            <Row mb={3}>
              <Col w={timeCol}>
                <T.PXS>
                  <i>{timeString}</i>
                </T.PXS>
              </Col>
              <Col w={updateCol}>
                <T.PXS>
                  <strong>{user.name}</strong> has completed their stay{' '}
                </T.PXS>
                {!seenForOrg && !loading && <Badge>new</Badge>}
                {loading && !seenForOrg && <LoadingBallPulseSync />}
              </Col>
            </Row>
          );

        case 'bookingTerminated':
          return (
            <Row mb={3}>
              <Col w={timeCol}>
                <T.PXS>
                  <i>{timeString}</i>
                </T.PXS>
              </Col>
              <Col w={updateCol}>
                <T.PXS>
                  Unfortunately due to lack of payment this booking has been
                  terminated.{' '}
                </T.PXS>
                {!seenForOrg && !loading && <Badge>new</Badge>}
                {loading && !seenForOrg && <LoadingBallPulseSync />}
              </Col>
            </Row>
          );
        default:
          return null;
      }

    default:
      return null;
  }
};

export default Update;
