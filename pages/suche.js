import React from 'react';
import fetch from 'isomorphic-unfetch';
import InfiniteScroll from 'react-infinite-scroller';

import ListItemPublication from '../components/list-item-publication';
import SearchBox from '../components/search-box';
import BaseContent from '../components/base-content';

class Search extends React.Component {
  state = {
    next: null,
    items: [],
  };

  componentDidMount() {
    const { initialItems, next } = this.props;
    this.setState({ items: initialItems, next });
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
    const { query, initialItems, count } = this.props;
    const { items, next } = this.state;

    return (
      <BaseContent hideSearch>
        <h1 className="title is-1">Suche</h1>
        <SearchBox q={query} />
        <div>{count} Ergbenisse</div>
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadFunc}
          hasMore={items.length && next !== null}
          loader={
            <div className="loader" style={{ margin: '0 auto' }} key={0} />
          }
        >
          {(items || initialItems).map(x => (
            <div>
              <ListItemPublication {...x} q={query} />
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: x.content__highlight }}
              />
              <br />
            </div>
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
  const { results: initialItems, count, next } = await res.json();
  return { initialItems, count, next, query: query.q };
};

export default Search;
