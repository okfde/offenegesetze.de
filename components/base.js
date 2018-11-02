import React from 'react';
import ScrollToTop from 'react-scroll-up';

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
    <ScrollToTop showUnder={160} duration={1000}>
      <span className="icon is-large">
        <i className="fas fa-arrow-circle-up fa-2x" />
      </span>
    </ScrollToTop>
  </div>
);

export default Base;
