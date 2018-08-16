import React from 'react';

import Footer from './footer';
import Nav from './nav';

const Base = ({ children, hideSearch }) => (
  <div>
    <Nav hideSearch={hideSearch} />
    <div className="container">{children}</div>
    <Footer />
  </div>
);

export default Base;
