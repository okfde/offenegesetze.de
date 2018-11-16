import React from 'react';
import Link from 'next/link';

import ListItem from '../list-item';

const Recent = ({ items }) => (
  <div className="section content is-normal">
    <div className="container">
      <div style={{ paddingBottom: '2rem' }}>
        <br />
        <h3 className="is-size-3">Neueste Veröffentlichungen</h3>
        <ul style={{ paddingBottom: '2rem' }}>
          {items.map(x => <ListItem key={x.id} {...x} />)}
        </ul>
        <Link prefetch href="/suche">
          <a className="button is-primary" href="/suche">
            Mehr Veröffentlichungen ansehen
          </a>
        </Link>
      </div>
    </div>
  </div>
);

export default Recent;
