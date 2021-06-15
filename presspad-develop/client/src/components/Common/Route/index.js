import React from 'react';
import { Route as RouterRoute, Redirect } from 'react-router-dom';
import LoadingPage from '../LoadingPage';
import Layout from '../../Layouts';
import { SIGNIN_URL } from '../../../constants/navRoutes';

const Route = ({
  isPrivate,
  isMounted,
  isLoggedIn,
  Component,
  path,
  exact,
  render,
  resetState,
  layout,
  image,
  mobileText,
  color,
  footer,
  ...rest
}) => {
  const navbarProps = { userType: rest.role, resetState, id: rest.id };

  return (
    <Layout
      layout={layout}
      navbarProps={navbarProps}
      isLoggedIn={isLoggedIn}
      image={image}
      mobileText={mobileText}
      color={color}
      footer={footer}
      role={rest.role}
    >
      {isMounted ? (
        <>
          {isPrivate ? (
            <RouterRoute
              path={path}
              {...rest}
              render={LinkProps =>
                render ||
                (isLoggedIn ? (
                  <Component {...LinkProps} {...rest} resetState={resetState} />
                ) : (
                  <Redirect to={SIGNIN_URL} />
                ))
              }
            />
          ) : (
            <RouterRoute
              path={path}
              component={Component}
              render={render}
              exact={exact}
            />
          )}
        </>
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <LoadingPage size="large" />
        </div>
      )}
    </Layout>
  );
};
export default Route;
