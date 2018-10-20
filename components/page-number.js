import React from 'react';

const PageNumber = ({ numPage }) => (
  <h2
    id={'p' + (numPage + 1).toString()}
    className="title is-2 has-text-centered"
    style={{ paddingBottom: '1rem', paddingTop: '5rem' }}
  >
    {numPage + 1}
  </h2>
);

export default PageNumber;
