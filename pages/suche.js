import React from 'react';
import fetch from 'isomorphic-unfetch';

import Base from '../components/base';
import ListItem from '../components/list-item';
import SearchBox from '../components/search-box';

const Search = ({ items, query }) => (
  <Base hideSearch>
    <h1 className="title">Suche</h1>
    <h2 className="subtitle">{query}</h2>
    <SearchBox q={query} />
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
  </Base>
);

Search.getInitialProps = async ({ query }) => {
  const res = await fetch(
    'https://fragdenstaat.de/api/v1/request/search/?q=' + query.q
  );
  const json = await res.json();
  return { items: json.objects, query: query.q };
};

export default Search;
