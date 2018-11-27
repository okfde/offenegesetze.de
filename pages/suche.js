import React from 'react';
import fetch from 'isomorphic-unfetch';
import InfiniteScroll from 'react-infinite-scroller';

import YearRangeFacet from '../components/search/year-range-facet';
import ListItem from '../components/list-item';
import SearchBox from '../components/search/search-box';
import BaseContent from '../components/layout/base-content';

import { MAX_YEAR, MIN_YEAR, KINDS } from '../misc/config';

// https://stackoverflow.com/a/13162319/4028896
function thousandSep(val) {
  return String(val)
    .split('')
    .reverse()
    .join('')
    .replace(/(\d{3}\B)/g, '$1.')
    .split('')
    .reverse()
    .join('');
}

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

  _onKindSelect = event => {
    const { kind, firstYear, lastYear } = this.props;
    const { value } = event.target;

    let arr = [];
    if (kind) {
      if (Array.isArray(kind)) {
        if (kind.includes(value)) {
          // remove
          arr = kind.filter(x => x !== value);
        } else {
          // add
          arr.push(kind);
        }
      } else {
        // remove
        arr = [];
        if (value !== kind) {
          // add
          arr = [value, kind];
        }
      }
    } else {
      arr = [value];
    }

    this._updateFilters(arr, `${firstYear}-${lastYear}`);
  };

  _onDateRangeChange = dateRange => {
    this.setState({ dateRange });
  };

  _onDateRangeChangeFinal = dateRange => {
    let { kind } = this.props;
    if (kind != null && !Array.isArray(kind)) kind = [kind];
    let year;
    if (dateRange.min === dateRange.max) {
      year = dateRange.min;
    } else {
      year = `${dateRange.min}-${dateRange.max}`;
    }
    this._updateFilters(kind, year);
  };

  _updateFilters = (bgblArr = [], year = '') => {
    const { query } = this.props;

    let arrStr = bgblArr.map(x => `&kind=${x}`).join('');

    if (year) arrStr += `&year=${year}`;

    window.location.assign(
      `/suche${
        query ? `?q=${query}${arrStr}` : arrStr ? `?${arrStr.substr(1)}` : ''
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
        <h1 className="title is-2">In Veröffentlichungen suchen</h1>
        <form action="/suche" style={{ width: '100%' }}>
          <SearchBox q={query} />
          <br />
          <div>
            <small>
              {count > 1 &&
                `Insgesamt gibt es ${thousandSep(
                  count
                )} Ergebnisse. Suche nach Veröffentlichungsjahr einschränken:`}
              {count === 1 && `Es gibt ein Ergebnis`}
              {count === 0 && 'Zu der Suche gibt es keine Treffer.'}
            </small>
          </div>
          <br />
          {count > 1 && (
            <YearRangeFacet
              value={dateRange}
              min={firstYear}
              max={lastYear}
              facet={facets.date}
              setYear={this.setYear}
              onChange={this._onDateRangeChange}
              onChangeComplete={this._onDateRangeChangeFinal}
              containerStyle={{ marginBottom: '1rem' }}
            />
          )}
          <br />
          {count > 1 && (
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
          )}

          <br />
          {count > 1 && (
            <div>
              <small>
                Suche nach Art einschränken.{' '}
                <a href="https://de.wikipedia.org/wiki/Bundesgesetzblatt_(Deutschland)#Teil_I">
                  Mehr Infos zu den Unterschieden
                </a>:
              </small>
            </div>
          )}
          {count > 1 && (
            <div className="field is-grouped" style={{ margin: '1rem 0' }}>
              {facets != null &&
                facets.kind.map(x => (
                  <p className="control" key={x.value}>
                    <label>
                      <input
                        name="kind"
                        value={x.value}
                        type="checkbox"
                        checked={x.selected}
                        onChange={this._onKindSelect}
                      />
                      {` ${KINDS[x.value].name}`}
                      <small> ({thousandSep(x.count)})</small>
                    </label>
                  </p>
                ))}
            </div>
          )}
        </form>

        {query != null &&
          query !== '' && (
            <div className="is-clearfix">
              <a
                className="button is-pulled-right"
                href={`https://api.offenegesetze.de/v1/veroeffentlichung/?format=rss&q=${query}${facets.kind
                  .filter(x => x.selected)
                  .map(x => `&kind=${x.value}`)}`}
              >
                <span className="icon is-small">
                  <i className="fas fa-rss" />
                </span>
                <span>als Feed abonnieren</span>
              </a>
            </div>
          )}

        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadFunc}
          hasMore={items != null && !!items.length && next !== null}
          loader={
            <div className="loader" style={{ margin: '0 auto' }} key={0} />
          }
        >
          {(items || initialItems).map(x => (
            <ul style={{ paddingBottom: '2rem' }} key={x.id}>
              <ListItem item={x} q={query} />
            </ul>
          ))}
        </InfiniteScroll>
      </BaseContent>
    );
  }
}

const splitFromTo = year => {
  if (!year) {
    return [MIN_YEAR, MAX_YEAR];
  }
  if (year.indexOf('-') === -1) {
    const parsedYear = parseInt(year, 10);
    if (Number.isNaN(parsedYear)) {
      return [MIN_YEAR, MAX_YEAR];
    }
    return [parsedYear, parsedYear];
  }
  const parts = year.split('-');
  let from = parseInt(parts[0], 10);
  from = Number.isNaN(from) ? MIN_YEAR : from;
  let to = parseInt(parts[1], 10);
  to = Number.isNaN(to) ? MAX_YEAR : to;
  return [from, to];
};

const addMissingValues = (array, from, to) => {
  const years = array.map(x => x.year);
  const res = array;
  let year = from;

  while (year <= to) {
    if (!years.includes(year)) {
      res.push({ year, count: 0 });
    }
    year += 1;
  }

  return res.sort((x, y) => x.year - y.year);
};

Search.getInitialProps = async ({ query }) => {
  const { q, kind, year } = query;

  let paramsStringBase = '';
  const params = {};

  if (q) {
    params.q = q;
  }

  if (kind) {
    if (Array.isArray(kind)) {
      const arrStr = kind.map(x => `&kind=${x}`).join('');
      paramsStringBase += arrStr;
    } else {
      params.kind = kind;
    }
  }
  if (year) {
    params.year = year;
  }

  const paramsString =
    paramsStringBase +
    Object.keys(params)
      .map(x => `&${x}=${encodeURIComponent(params[x])}`)
      .join('');

  const res = await fetch(
    `https://api.offenegesetze.de/v1/veroeffentlichung/?limit=10${paramsString}`
  );
  const { results: initialItems, count, next, facets } = await res.json();

  const [from, to] = splitFromTo(params.year);

  facets.date = facets.date.map(x => ({
    year: parseInt(x.value.split('-')[0], 10),
    ...x,
  }));

  facets.date = addMissingValues(facets.date, from, to);

  facets.kind = facets.kind.sort((a, b) => (a.value < b.value ? -1 : 1));

  return {
    initialItems,
    count,
    next,
    query: q,
    facets,
    firstYear: from,
    lastYear: to,
    kind,
  };
};

Search.defaultProps = {
  initialItems: [],
};

export default Search;
