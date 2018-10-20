import React from 'react';

import Footer from './footer';
import Nav from './nav';

import './styles.css';

const Base = ({ navItems, children, hideSearch, hideFooter }) => (
  <div>
    <Nav hideSearch={hideSearch} navItems={navItems} />
    <div style={{ minHeight: '50vh' }} className="container">
      {children}
    </div>
    {!hideFooter && <Footer />}
  </div>
);

export default Base;
