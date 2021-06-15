/* eslint-disable consistent-return */
import React, { useState, useEffect } from 'react';
import { Spin, Table, Collapse } from 'antd';
import { BookingCards, TipsCard } from '../../Common/Cards';
import * as T from '../../Common/Typography';
import * as S from './style';
import envelope from '../../../assets/envelope.png';
import { TABLET_WIDTH } from '../../../constants/screenWidths';
import { bookingsColumns } from './TablesColumns';
import { colors } from '../../../theme';
import { getBookings } from './utils';
import { bottomMargins } from '../InternDashboard/styleProperties';
import Title from '../../Common/Title';
import { Row, Col } from '../../Common/Grid';

const { Panel } = Collapse;

const sectionComponent = {
  desktop: T.H5C,
  mobile: T.H6C,
};

const fontStyles = {
  fontWeight: 'bold',
  fontSize: '24px',
  lineHeight: '31px',
  textTransform: 'uppercase',
};

const Bookings = props => {
  const { windowWidth, history, role } = props;
  const isMobile = windowWidth < TABLET_WIDTH;
  const device = isMobile ? 'mobile' : 'desktop';
  const SectionHeadline = sectionComponent[isMobile ? 'mobile' : 'desktop'];

  const [isLoading, setIsLoading] = useState(false);
  const [bookings, setBookings] = useState({
    currentBooking: [],
    upcomingBooking: [],
    bookingRequests: [],
    previousBookings: [],
  });

  useEffect(() => {
    setIsLoading(true);
    const fetchBookings = async () => {
      const _bookings = await getBookings();
      setBookings({
        currentBooking: _bookings.currentBooking,
        upcomingBooking: _bookings.nextUpcomingBooking,
        bookingRequests: _bookings.bookingRequests,
        previousBookings: _bookings.previousBookings,
      });
    };

    fetchBookings();

    setIsLoading(false);
  }, []);

  const {
    currentBooking,
    upcomingBooking,
    bookingRequests,
    previousBookings,
  } = bookings;

  if (isLoading) return <Spin />;

  return (
    <S.Wrapper>
      <Title color="blue" pageTitle windowWidth={windowWidth}>
        Your Bookings
      </Title>
      <S.ContentWrapper>
        {/* CURRENT BOOKING */}
        <Row mb="7" mt="1">
          <Col w={[4, 12, 12]} outer>
            <SectionHeadline
              style={{
                ...fontStyles,
                marginBottom: bottomMargins.sectionTitle[device],
              }}
              color="gray"
            >
              Current Booking
            </SectionHeadline>
            {currentBooking.length ? (
              <BookingCards
                role={role}
                windowWidth={windowWidth}
                type="small"
                startDate={currentBooking[0].startDate}
                endDate={currentBooking[0].endDate}
                price={currentBooking[0].price}
                withUser={currentBooking[0].withUser}
                bookingID={currentBooking[0]._id}
                withUserType={currentBooking[0].withUserRole}
              />
            ) : (
              <T.P color={colors.gray}>No current booking</T.P>
            )}
          </Col>
        </Row>

        {/* UPCOMING BOOKING */}
        <Row mb="7">
          <Col w={[4, 12, 12]} outer>
            <SectionHeadline
              style={{
                ...fontStyles,
                marginBottom: bottomMargins.sectionTitle[device],
              }}
              color="gray"
            >
              Upcoming Booking
            </SectionHeadline>
            {upcomingBooking.length ? (
              <BookingCards
                role={role}
                windowWidth={windowWidth}
                type="big"
                startDate={upcomingBooking[0].startDate}
                endDate={upcomingBooking[0].endDate}
                price={upcomingBooking[0].price}
                withUser={upcomingBooking[0].withUser}
                bookingID={upcomingBooking[0]._id}
                withUserType={upcomingBooking[0].withUserRole}
                bio={upcomingBooking[0].withUserBio}
                interests={upcomingBooking[0].interests}
                status={upcomingBooking[0].status}
              />
            ) : (
              <T.P color={colors.gray}>No upcoming booking</T.P>
            )}
          </Col>
        </Row>
        {/* BOOKING REQUESTS */}
        <Row mb="7">
          <Col w={[4, 12, 12]} outer>
            <S.PanelWrapper>
              <Collapse
                style={{
                  border: 'none',
                  background: 'white',
                  marginLeft: '-1rem',
                }}
                // expandIconPosition="right"
              >
                <Panel
                  style={{ marginBottom: '2rem' }}
                  header="Booking Requests"
                >
                  <S.TableWrapper>
                    <Table
                      dataSource={bookingRequests && bookingRequests}
                      columns={bookingsColumns({ windowWidth, role })}
                      rowKey="_id"
                      onRow={record => ({
                        onClick: () => history.push(`/booking/${record._id}`),
                        style: { cursor: 'pointer' },
                      })}
                    />
                  </S.TableWrapper>
                </Panel>

                <Panel header="Previous Bookings">
                  <S.TableWrapper>
                    <Table
                      dataSource={previousBookings && previousBookings}
                      columns={bookingsColumns({ windowWidth, role })}
                      rowKey="_id"
                      onRow={record => ({
                        onClick: () => history.push(`/booking/${record._id}`),
                        style: { cursor: 'pointer' },
                      })}
                    />
                  </S.TableWrapper>
                </Panel>
              </Collapse>
            </S.PanelWrapper>
          </Col>
        </Row>
      </S.ContentWrapper>
      <S.SideWrapper>
        {!isMobile && (
          <S.ImageWrapper>
            <img src={envelope} alt="Invoices" />
          </S.ImageWrapper>
        )}
        <TipsCard
          list={[
            'tip number 1',
            'tip 2',
            'some other tip that longer than others',
          ]}
          m="4"
          userRole={role === 'intern' ? 'guest' : 'host'}
        />
      </S.SideWrapper>
    </S.Wrapper>
  );
};

export default Bookings;
