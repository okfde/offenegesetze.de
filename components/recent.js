import React from 'react';

import ListItem from './list-item';

const Recent = ({ items }) => (
  <div style={{ paddingBottom: '2rem' }}>
    <br />
    <h2 className="subtitle">Neueste Veröffentlichungen</h2>
    <ul style={{ paddingBottom: '2rem' }}>
      {items.map(x => <ListItem key={x.id} {...x} />)}
    </ul>
    <a className="button is-primary" href="/neueste">
      Mehr Veröffentlichungen ansehen
    </a>
  </div>
);

export default Recent;
