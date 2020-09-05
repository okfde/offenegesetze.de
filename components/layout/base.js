import React from 'react';
import ScrollToTop from 'react-scroll-up';
import Link from 'next/link';
import Head from 'next/head';

import Footer from './footer';
import Nav from './nav';

import '../styles.scss';

const Base = ({ title, navItems, children, hideSearch, hideFooter }) => (
  <div>
    <Head>
      <title>
        {title && `${title} - `}OffeneGesetze.de – Freier Zugang zu unseren
        Gesetzen
      </title>
    </Head>

    <Nav hideSearch={hideSearch} navItems={navItems} />
    <main style={{ minHeight: '50vh' }} className="container">
      {children}
    </main>

    {!hideFooter && <Footer />}
    {hideFooter && (
      <Link href="/kontakt">
        <a
          href="/kontakt"
          className="is- is-hidden-touch"
          style={{ position: 'fixed', bottom: 10, right: 10, color: 'inherit' }}
        >
          <small>Kontakt</small>
        </a>
      </Link>
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
