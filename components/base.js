import React from 'react';

import Footer from './footer';
import Nav from './nav';

import './styles.css';

const Base = ({ navItems, children, hideSearch, hideFooter }) => (
  <div>
    <Nav hideSearch={hideSearch} navItems={navItems} />
    <div style={{ minHeight: '40rem' }} className="container">
      {children}
    </div>
    {!hideFooter && <Footer />}
  </div>
);

export default Base;
