import React from 'react';
import ScrollToTop from 'react-scroll-up';

import Head from 'next/head';

import Footer from './footer';
import Nav from './nav';

import './styles.css';

const Base = ({ title, navItems, children, hideSearch, hideFooter }) => (
  <div>
    <Head>
      <title>{title && `${title} - `}OffeneGesetze.de</title>
    </Head>

    <Nav hideSearch={hideSearch} navItems={navItems} />
    <main style={{ minHeight: '50vh' }} className="container">
      {children}
    </main>

    {!hideFooter && <Footer />}
    {hideFooter && (
      <a
        className="is- is-hidden-touch"
        style={{ position: 'fixed', bottom: 10, right: 10, color: 'inherit' }}
        href="/kontakt"
      >
        <small>Kontakt</small>
      </a>
    )}
    <ScrollToTop
      showUnder={160}
      duration={1000}
      style={{
        bottom: 30,
        right: 10,
      }}
    >
      <span className="icon is-large">
        <i className="fas fa-arrow-circle-up fa-2x" />
      </span>
    </ScrollToTop>
  </div>
);

export default Base;
