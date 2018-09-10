import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

const PageNumber = ({ numPage }) => (
  <ScrollableAnchor id={(numPage + 1).toString()}>
    <h2
      className="title is-2 has-text-centered"
      style={{ paddingBottom: '1rem', paddingTop: '5rem' }}
    >
      {numPage + 1}
    </h2>
  </ScrollableAnchor>
);

export default PageNumber;
