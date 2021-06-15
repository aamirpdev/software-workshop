import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import ReactGA from 'react-ga';

import CookieBot from 'react-cookiebot';
import App from './components/App';
import ErrorBoundary from './components/Common/ErrorBoundary';

import './index.css';

if (process.env.NODE_ENV === 'production') {
  Sentry.init({ dsn: process.env.REACT_APP_SENTRY_DSN });

  // Google Analytics
  ReactGA.initialize(process.env.REACT_APP_ANALYTICS_ID);
  ReactGA.pageview(window.location.pathname + window.location.search);
}
const domainGroupId = process.env.REACT_APP_COOKIEBOT_DOMAIN_ID;

ReactDOM.render(
  process.env.NODE_ENV === 'production' ? (
    <ErrorBoundary>
      <CookieBot domainGroupId={domainGroupId} />
      <App />
    </ErrorBoundary>
  ) : (
    <>
      <CookieBot domainGroupId={domainGroupId} />
      <App />
    </>
  ),
  document.getElementById('root'),
);
