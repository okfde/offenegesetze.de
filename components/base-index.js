import React from 'react';

import Head from 'next/head';

import Footer from './footer';
import Nav from './nav';

import './styles.css';

const BaseIndex = ({ navItems, children, hideSearch, hideFooter }) => (
  <div>
    <Head>
      <title>OffeneGesetze.de</title>
    </Head>
    <Nav hideSearch={hideSearch} navItems={navItems} />
    <main style={{ minHeight: '50vh' }}>{children}</main>
    {!hideFooter && <Footer />}
  </div>
);

export default BaseIndex;
