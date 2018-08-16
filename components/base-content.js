import React from 'react';

import Base from './base';

// not sure why `is-offset-1-mobile` is needed but I just leave it like this

const BaseContent = ({ children }) => (
  <Base>
    <div className="columns" style={{ padding: '1rem 0' }}>
      <div className="column" />
      <div className="column is-offset-1-mobile is-10-mobile is-half-desktop is-three-fifths-tablet">
        {children}
      </div>
      <div className="column" />
    </div>
  </Base>
);

export default BaseContent;
