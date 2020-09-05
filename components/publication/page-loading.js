import React from 'react';

import PageNumber from './page-number';
import { BounceLoader } from 'react-spinners';

import { PRIMARY_COLOR } from '../../misc/config';

// This is quite hacky but the pager loaders need to rendered right away to
// determine the appropiate height for the anchor tags.
const renderLoader = (maxPages) =>
  [...Array(maxPages).keys()].map((x) => {
    return <PageLoading page={x + 1} key={x} />;
  });

const PageLoading = ({ page }) => (
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
          <BounceLoader sizeUnit="rem" size={20} color={PRIMARY_COLOR} />
        </div>
      </div>
    </div>
  </div>
);

export { PageLoading, renderLoader };
