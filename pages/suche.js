import React from 'react';
import fetch from 'isomorphic-unfetch';
import InfiniteScroll from 'react-infinite-scroller';
import InputRange from 'react-input-range';

import ListItem from '../components/list-item';
import SearchBox from '../components/search-box';
import BaseContent from '../components/base-content';

import './style.css';
import 'react-input-range/lib/css/index.css';

class Search extends React.Component {
  state = {
    next: null,
    items: [],
    dateRange: { min: 1999, max: 2000 },
    firstYear: 1999,
    lastYear: 2000,
  };

  componentDidMount() {
    const { initialItems, next, facets } = this.props;
    this.setState({ items: initialItems, next });

    const firstYear = parseInt(facets.date[0].value.split('-')[0]);
    const lastYear = parseInt(facets.date.slice(-1)[0].value.split('-')[0]);

    this.setState({
      dateRange: { min: firstYear, max: lastYear },
      lastYear,
      firstYear,
    });
  }

  loadFunc = () => {
    const { next } = this.props;
    fetch(next)
      .then(x => x.json())
      .then(x =>
        this.setState({
          next: x.next,
          items: this.state.items.concat(x.results),
        })
      );
  };

  render() {
    const { query, initialItems, count, facets } = this.props;
    const { items, next, firstYear, lastYear, dateRange } = this.state;

    return (
      <BaseContent hideSearch>
        <h1 className="title is-1">Suche</h1>
        <SearchBox q={query} />
        <div>{count} Ergbenisse</div>
        <br />
        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
          {facets.date.map(x => (
            <div
              style={{
                height: `${x.count}px`,
                backgroundColor:
                  x.year >= dateRange.min && x.year <= dateRange.max
                    ? 'blue'
                    : 'grey',
                width: 1,
                flexGrow: 1,
                transition: 'background-color 500ms linear',
              }}
            />
          ))}
        </div>
        <br />

        <InputRange
          maxValue={lastYear}
          minValue={firstYear}
          value={this.state.dateRange}
          onChange={dateRange => this.setState({ dateRange })}
        />
        <br />

        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadFunc}
          hasMore={!!items.length && next !== null}
          loader={
            <div className="loader" style={{ margin: '0 auto' }} key={0} />
          }
        >
          {(items || initialItems).map(x => (
            <ul style={{ paddingBottom: '2rem' }}>
              <ListItem {...x} q={query} />
            </ul>
          ))}
        </InfiniteScroll>
      </BaseContent>
    );
  }
}

Search.getInitialProps = async ({ query }) => {
  const res = await fetch(
    `https://api.offenegesetze.de/v1/veroeffentlichung/?q=${query.q}&limit=10`
  );
  const { results: initialItems, count, next, facets } = await res.json();

  facets.date.forEach(x => {
    x.year = parseInt(x.value.split('-')[0]);
  });

  return { initialItems, count, next, query: query.q, facets };
};

export default Search;
