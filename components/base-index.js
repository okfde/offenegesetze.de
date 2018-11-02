import React from 'react';

import Footer from './footer';
import Nav from './nav';

import './styles.css';

const BaseIndex = ({ navItems, children, hideSearch, hideFooter }) => (
  <div>
    <Nav hideSearch={hideSearch} navItems={navItems} />
    <div style={{ minHeight: '50vh' }}>{children}</div>
    {!hideFooter && <Footer />}
  </div>
);

export default BaseIndex;
