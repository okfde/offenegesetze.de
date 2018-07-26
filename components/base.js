import React from 'react';

import Footer from './footer';
import Nav from './nav';

const Base = ({ children, hideSearch }) => (
  <div>
    <Nav hideSearch={hideSearch} />
    <section className="section">
      <div className="container">{children}</div>
    </section>
    <Footer />
  </div>
);

export default Base;
