import React from 'react';

import Head from 'next/head';

import Footer from './footer';
import Nav from './nav';

import '../styles.scss';

const BaseIndex = ({ navItems, children, hideSearch, hideFooter }) => (
  <div>
    <Head>
      <title>OffeneGesetze.de – Freier Zugang zu unseren Gesetzen</title>
    </Head>
    <Nav hideSearch={hideSearch} navItems={navItems} />
    <main style={{ minHeight: '50vh' }}>{children}</main>
    {!hideFooter && <Footer />}
  </div>
);

export default BaseIndex;
