import React from 'react';

function truncate(string, len = 150) {
  if (string.length > len) return string.substring(0, len) + '...';
  return string;
}

// NB: Do not remove the class. This is used to detect if it this element has
// already rendered.
const PageNumber = ({ numPage, text }) => (
  <div
    style={{
      display: 'table-row',
      color: 'black',
      background: 'rgba(255, 255, 255,  0.8)',
    }}
    id={`page=${(numPage + 1).toString()}`}
    className={` p${numPage}`}
  >
    <div style={{ display: 'table-cell', paddingRight: '2rem' }}>
      Seite {numPage + 1}
    </div>
    <div style={{ display: 'table-cell', paddingRight: '.5rem' }}>
      <small>{text && truncate(text)}</small>
    </div>
  </div>
);

export default PageNumber;
