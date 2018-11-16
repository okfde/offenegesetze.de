import React from 'react';

import ListItem from './list-item';

const Recent = ({ items }) => (
  <div style={{ paddingBottom: '2rem' }}>
    <br />
    <h3 className="is-size-3">Neueste Veröffentlichungen</h3>
    <ul style={{ paddingBottom: '2rem' }}>
      {items.map(x => <ListItem key={x.id} {...x} />)}
    </ul>
    <a className="button is-primary" href="/suche">
      Mehr Veröffentlichungen ansehen
    </a>
  </div>
);

export default Recent;
