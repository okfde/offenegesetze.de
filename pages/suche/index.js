import React from 'react';
import fetch from 'isomorphic-unfetch';
import InfiniteScroll from 'react-infinite-scroller';
import InputRange from 'react-input-range';

import ListItem from '../../components/list-item';
import SearchBox from '../../components/search-box';
import BaseContent from '../../components/base-content';

import './style.css';
import YearRangeFacet from '../../components/year-range-facet';

class Search extends React.Component {
  constructor(props) {
    super(props);

    // init state with props created on the server
    const { initialItems: items, next, firstYear, lastYear } = this.props;
    this.state = {
      next,
      items,
      dateRange: { min: firstYear, max: lastYear },
    };
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
    const {
      query,
      initialItems,
      count,
      facets,
      firstYear,
      lastYear,
    } = this.props;
    const { items, next, dateRange } = this.state;

    return (
      <BaseContent hideSearch>
        <h1 className="title is-1">Suche</h1>
        <SearchBox q={query} />
        <div>{count} Ergbenisse</div>

        <YearRangeFacet
          value={dateRange}
          min={firstYear}
          max={lastYear}
          bars={facets.date}
          onChange={dateRange => this.setState({ dateRange })}
          containerStyle={{ padding: '0.5rem', marginBottom: '1rem' }}
        />

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

  const firstYear = facets.date[0].year;
  const lastYear = facets.date.slice(-1)[0].year;

  return {
    initialItems,
    count,
    next,
    query: query.q,
    facets,
    firstYear,
    lastYear,
  };
};

export default Search;
