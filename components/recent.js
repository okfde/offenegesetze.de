import React from 'react';

import ListItemPublication from './list-item-publication';

const Recent = ({ items }) => (
  <div style={{ paddingBottom: '2rem' }}>
    <br />
    <h2 className="subtitle">Neueste Veröffentlichungen</h2>
    <ul style={{ paddingBottom: '2rem' }}>
      {items.map(x => <ListItemPublication {...x} />)}
    </ul>
    <a className="button is-primary" href="/neueste">
      Mehr Veröffentlichungen ansehen
    </a>
  </div>
);

export default Recent;
