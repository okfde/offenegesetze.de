import React from 'react';

import Base from './base';

const BaseContent = ({ navItems, children, ...rest }) => (
  <Base navItems={navItems} {...rest}>
    <div className="section content">
      <div className="columns is-tablet" style={{ padding: '1rem 0' }}>
        <div className="column is-12-mobile is-8-desktop is-offset-2-desktop is-three-fifths-tablet is-offset-one-fifth-tablet">
          {children}
        </div>
      </div>
    </div>
  </Base>
);

export default BaseContent;
