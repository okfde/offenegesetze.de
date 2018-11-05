import React from 'react';
import fetch from 'isomorphic-unfetch';
import InfiniteScroll from 'react-infinite-scroller';

import YearRangeFacet from '../../components/year-range-facet';
import ListItem from '../../components/list-item';
import SearchBox from '../../components/search-box';
import BaseContent from '../../components/base-content';

import './style.css';

import { MAX_YEAR, MIN_YEAR, KINDS } from '../../config';

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
    const { kind, firstYear, lastYear } = this.props;
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
        // remove
        arr = [];
        if (name !== kind) {
          // add
          arr = [name, kind];
        }
      }
    } else {
      arr = [name];
    }

    this._updateFilters(arr, firstYear, lastYear);
  };

  _onDateRangeChange = dateRange => {
    this.setState({ dateRange });
  };

  _onDateRangeChangeFinal = dateRange => {
    let { kind } = this.props;
    if (kind != null && !Array.isArray(kind)) kind = [kind];
    this._updateFilters(kind, dateRange.min, dateRange.max);
  };

  _updateFilters = (bgblArr = [], from = null, to = null) => {
    const { query } = this.props;

    let arrStr = bgblArr.map(x => `&kind=${x}`).join('');

    if (from != null) arrStr += `&from=${from}`;
    if (to != null) arrStr += `&to=${to}`;

    window.location.assign(
      `/suche${
        query ? `?q=${query}${arrStr}` : arrStr ? `?${  arrStr.substr(1)}` : ''
      }`
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
      <BaseContent hideSearch hideFooter>
        <h1 className="title is-2">In Veröffentlichungen Suchen</h1>
        <SearchBox q={query} />
        <br />
        <div>
          <small>
            Insgesamt gibt es {count} Ergebnisse. Suche nach
            Veröffentlichungsjahr einschränken:
          </small>
        </div>
        <br />
        <YearRangeFacet
          value={dateRange}
          min={firstYear}
          max={lastYear}
          bars={facets.date}
          beforeBars={facets.beforeDate}
          afterBars={facets.afterDate}
          onChange={this._onDateRangeChange}
          onChangeComplete={this._onDateRangeChangeFinal}
          containerStyle={{ marginBottom: '1rem' }}
        />
        <br />
        <div>
          <small>Auf ein Jahr beschränken</small>
          <div className="select is-small" style={{ paddingLeft: '1rem' }}>
            <select
              value={dateRange.min === dateRange.max ? dateRange.min : ''}
              onChange={event =>
                this._onDateRangeChangeFinal({
                  min: parseInt(event.target.value),
                  max: parseInt(event.target.value),
                })
              }
            >
              <option value="" />
              {Array.from(
                { length: MAX_YEAR - MIN_YEAR },
                (_, i) => MAX_YEAR - i
              ).map(x => (
                <option value={x} key={x}>
                  {x}
                </option>
              ))}
            </select>
          </div>
          {dateRange.min === dateRange.max && (
            <button
              type="reset"
              className="button is-small"
              style={{ marginLeft: '1rem' }}
              onClick={x => {
                this._onDateRangeChangeFinal({ min: null, max: null });
              }}
            >
              <span className="icon is-small">
                <i className="fas fa-times" />
              </span>
            </button>
          )}
        </div>

        <br />
        <div>
          <small>
            Suche nach Art einschränken.{' '}
            <a href="https://de.wikipedia.org/wiki/Bundesgesetzblatt_(Deutschland)#Teil_I">
              Mehr Infos zu den Unterschieden
            </a>:
          </small>
        </div>
        <div className="field is-grouped" style={{ margin: '1rem 0' }}>
          {facets.kind.map(x => (
            <p className="control" key={x.value}>
              <label>
                <input
                  name={x.value}
                  type="checkbox"
                  checked={x.selected}
                  onChange={this._onSelect}
                />
                {` ${KINDS[x.value].name}`}
                <small> ({x.count})</small>
              </label>
            </p>
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
            <ul style={{ paddingBottom: '2rem' }} key={x.id}>
              <ListItem {...x} q={query} />
            </ul>
          ))}
        </InfiniteScroll>
      </BaseContent>
    );
  }
}

const addMissingValues = (array, from, to) => {
  const years = array.map(x => x.year);
  const res = array;
  let year = parseInt(from, 10);

  while (year <= parseInt(to)) {
    if (!years.includes(year)) {
      res.push({ year, count: 0 });
    }
    year += 1;
  }

  return res.sort((x, y) => x.year - y.year);
};

Search.getInitialProps = async ({ query }) => {
  const { q, kind, from, to } = query;

  let paramsStringBase = '';
  const params = {};

  if (q != null) params.q = q;

  if (kind) {
    if (Array.isArray(kind)) {
      const arrStr = kind.map(x => `&kind=${x}`).join('');
      paramsStringBase += arrStr;
    } else {
      params.kind = kind;
    }
  }

  if (from != null && to != null) {
    params.year = `${from}-${to}`;
  }

  let paramsString =
    paramsStringBase +
    Object.keys(params)
      .map(x => `&${x}=${params[x]}`)
      .join('');

  const res = await fetch(
    `https://api.offenegesetze.de/v1/veroeffentlichung/?limit=10${paramsString}`
  );
  const { results: initialItems, count, next, facets } = await res.json();

  // ugly code start
  if (from != null && from != MIN_YEAR) {
    const fromFixed = Math.max(parseInt(from, 10) - 1, MIN_YEAR);
    params.year = `-${fromFixed}`;

    paramsString =
      paramsStringBase +
      Object.keys(params)
        .map(x => `&${x}=${params[x]}`)
        .join('');
    const res2 = await fetch(
      `https://api.offenegesetze.de/v1/veroeffentlichung/?limit=10${paramsString}`
    );

    const jsres = await res2.json();
    if ('facets' in jsres) {
      const {
        facets: { date: beforeDate },
      } = jsres;
      facets.beforeDate = beforeDate;
      facets.beforeDate.forEach(x => {
        x.year = parseInt(x.value.split('-')[0]);
      });
      facets.beforeDate = addMissingValues(
        facets.beforeDate,
        MIN_YEAR,
        fromFixed
      );
    } else {
      facets.beforeDate = addMissingValues([], MIN_YEAR, fromFixed);
    }
  }

  if (to != null && to != MAX_YEAR) {
    const toFixed = Math.min(parseInt(to, 10) + 1, MAX_YEAR);
    params.year = `${toFixed}-`;

    paramsString =
      paramsStringBase +
      Object.keys(params)
        .map(x => `&${x}=${params[x]}`)
        .join('');

    const res3 = await fetch(
      `https://api.offenegesetze.de/v1/veroeffentlichung/?limit=10${paramsString}`
    );

    const jsres = await res3.json();
    if ('facets' in jsres) {
      const {
        facets: { date: afterDate },
      } = jsres;

      facets.afterDate = afterDate;
      facets.afterDate.forEach(x => {
        x.year = parseInt(x.value.split('-')[0]);
      });
      facets.afterDate = addMissingValues(facets.afterDate, toFixed, MAX_YEAR);
    } else {
      facets.afterDate = addMissingValues([], toFixed, MAX_YEAR);
    }
  }

  // ugly code end

  facets.date.forEach(x => {
    x.year = parseInt(x.value.split('-')[0]);
  });

  facets.date = addMissingValues(facets.date, from || MIN_YEAR, to || MAX_YEAR);

  const firstYear = (from && parseInt(from)) || MIN_YEAR;
  const lastYear = (to && parseInt(to)) || MAX_YEAR;

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
