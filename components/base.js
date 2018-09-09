import React from 'react';

import Footer from './footer';
import Nav from './nav';

const Base = ({ navItems, children, hideSearch }) => (
  <div>
    <Nav hideSearch={hideSearch} navItems={navItems} />
    <div className="container">{children}</div>
    <Footer />
  </div>
);

export default Base;
