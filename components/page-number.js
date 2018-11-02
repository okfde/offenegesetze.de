import React from 'react';

// NB: Do not remove the class. This is used to detect if it this element has
// already rendered.
const PageNumber = ({ numPage }) => (
  <h2
    id={`page=${(numPage + 1).toString()}`}
    className={`title is-2 has-text-centered p${numPage}`}
    style={{ paddingBottom: '1rem', paddingTop: '5rem' }}
  >
    {numPage + 1}
  </h2>
);

export default PageNumber;
