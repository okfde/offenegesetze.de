import React from 'react';

// function truncate(string, len = 120) {
//   if (string.length > len) return `${string.substring(0, len)  }...`;
//   return string;
// }

// NB: Do not remove the class. This is used to detect if it this element has
// already rendered.
const PageNumber = ({ numPage, text }) => (
  <div id={`page=${numPage}`} className="page-number">
    <div className="page-number-no">
      <a
        style={{ textDecoration: 'underline', color: 'inherit' }}
        href={`#page=${numPage}`}
      >
        <span className="page-number-label-large">Seite&nbsp;{numPage}</span>
        <span className="page-number-label-small">S.&nbsp;{numPage}</span>
      </a>
    </div>
    <div className="page-number-title">{text || ''}</div>
  </div>
);

export default PageNumber;
