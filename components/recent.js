import React from 'react';

import ListItem from './list-item';

const Recent = ({ items }) => (
  <ul>
    {items.map(x => {
      return <ListItem title={x.title} subtitle={x.first_message} id={x.id} />;
    })}
  </ul>
);

export default Recent;
