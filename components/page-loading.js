import React from 'react';
import ReactLoading from 'react-loading';

import PageNumber from './page-number';

const renderLoader = maxPages =>
  [...Array(maxPages).keys()].map(x => {
    return <PageLoading page={x + 1} key={x} />;
  });

function PageLoading({ page }) {
  return (
    <div>
      <PageNumber numPage={page} />
      <div className="dina4">
        <div className="dina4-ratio">
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <ReactLoading
              type="spin"
              color="#0069d0"
              height="20%"
              width="20%"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { PageLoading, renderLoader };
