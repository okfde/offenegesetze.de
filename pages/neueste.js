import React from 'react';
import fetch from 'isomorphic-unfetch';
import InfiniteScroll from 'react-infinite-scroller';

import BaseContent from '../components/base-content';
import ListItemPublication from '../components/list-item-publication';

const LIMIT = 10;

class RecentPublications extends React.Component {
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
    const { initialItems } = this.props;
    const { items, next } = this.state;
    return (
      <BaseContent>
        <h1 className="title is-1">Neueste Veröffentlichungen</h1>
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadFunc}
          hasMore={!!items.length && next !== null}
          loader={
            <div className="loader" style={{ margin: '0 auto' }} key={0} />
          }
        >
          {(items || initialItems).map(x => <ListItemPublication {...x} />)}
        </InfiniteScroll>
      </BaseContent>
    );
  }
}

RecentPublications.getInitialProps = async () => {
  const res = await fetch(
    `https://api.offenegesetze.de/v1/veroeffentlichung/?limit=${LIMIT}`
  );
  const resJson = await res.json();
  return { initialItems: resJson.results, next: resJson.next };
};

export default RecentPublications;
