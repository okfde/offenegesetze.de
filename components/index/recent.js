import React from 'react';
import Link from 'next/link';

import ListItem from '../list-item';

const Recent = ({ items }) => (
  <div className="section content is-normal recent">
    <div className="container">
      <div style={{ paddingBottom: '2rem' }}>
        <br />
        <h3 className="is-size-3">
          Neueste <wbr />
          Veröffentlichungen
        </h3>
        <ul style={{ paddingBottom: '2rem' }}>
          {items.map((x) => (
            <ListItem key={x.id} item={x} />
          ))}
        </ul>
        <Link href="/suche">
          <a className="button is-primary" href="/suche">
            Mehr Veröffentlichungen
          </a>
        </Link>
      </div>
    </div>
  </div>
);

export default Recent;
