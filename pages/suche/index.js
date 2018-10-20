import React from 'react';
import fetch from 'isomorphic-unfetch';
import InfiniteScroll from 'react-infinite-scroller';

import YearRangeFacet from '../../components/year-range-facet';
import ListItem from '../../components/list-item';
import SearchBox from '../../components/search-box';
import BaseContent from '../../components/base-content';

import './style.css';

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

  _onSelect = event => {
    const { kind, query } = this.props;
    const { name } = event.target;

    let arr = [];
    if (kind) {
      if (Array.isArray(kind)) {
        if (kind.includes(name)) {
          // remove
          arr = kind.filter(x => x !== name);
        } else {
          // add
          arr.push(kind);
        }
      } else {
        if (name === kind) {
          // remove
          arr = [];
        } else {
          // add
          arr = [name, kind];
        }
      }
    } else {
      arr = [name];
    }

    const arrStr = arr.map(x => '&kind=' + x).join('');
    window.location.assign(`/suche?q=${query}${arrStr}`);
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

        <div>
          {facets.kind.map(x => (
            <div>
              <input
                name={x.value}
                type="checkbox"
                checked={x.selected}
                onChange={this._onSelect}
              />
              {x.value}
              {x.count}
            </div>
          ))}
        </div>

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
  const { q, kind, from, to } = query;

  let paramsString = '';
  const params = { q };

  if (kind) {
    if (Array.isArray(kind)) {
      const arrStr = kind.map(x => `&kind=${x}`).join('');
      paramsString += arrStr;
    } else {
      params.kind = kind;
    }
  }

  paramsString += Object.keys(params)
    .map(x => `&${x}=${params[x]}`)
    .join('');

  const res = await fetch(
    `https://api.offenegesetze.de/v1/veroeffentlichung/?limit=10${paramsString}`
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
    query: q,
    facets,
    firstYear,
    lastYear,
    kind,
  };
};

export default Search;
