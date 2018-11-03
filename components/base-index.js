import React from 'react';

import Footer from './footer';
import Nav from './nav';

import './styles.css';

const BaseIndex = ({ navItems, children, hideSearch, hideFooter }) => (
  <div>
    <Nav hideSearch={hideSearch} navItems={navItems} />
    <main style={{ minHeight: '50vh' }}>{children}</main>
    {!hideFooter && <Footer />}
  </div>
);

export default BaseIndex;
