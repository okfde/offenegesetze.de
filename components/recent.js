import React from 'react';

import ListItem from './list-item';

const Recent = ({ items }) => (
  <section className="section">
    <h2 className="subtitle">Letzte Veröffentlichungen</h2>
    <ul>
      {items.map(x => {
        return (
          <ListItem
            key={x.id}
            title={x.title}
            subtitle={x.first_message}
            id={x.id}
          />
        );
      })}
    </ul>
  </section>
);

export default Recent;
