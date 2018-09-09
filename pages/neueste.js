import React from 'react';
import fetch from 'isomorphic-unfetch';
import InfiniteScroll from 'react-infinite-scroller';

import BaseContent from '../components/base-content';
import ListItemPublication from '../components/list-item-publication';

class RecentPublications extends React.Component {
  state = {
    numPage: 0,
    items: [],
  };

  componentDidMount() {
    console.log(this.props);
    this.setState({ items: this.props.initialItems });
  }

  loadFunc = () => {
    console.log('TODO');
  };

  render() {
    const { initialItems } = this.props;
    const { items } = this.state;
    return (
      <BaseContent>
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadFunc}
          hasMore={true || false}
          loader={
            <div className="loader" key={0}>
              Loading ...
            </div>
          }
        >
          {(items || initialItems).map(x => <ListItemPublication {...x} />)}
        </InfiniteScroll>
      </BaseContent>
    );
  }
}

RecentPublications.getInitialProps = async () => {
  const res = await fetch('https://api.offenegesetze.de/v1/amtsblatt/');
  const initialItems = await res.json();
  return { initialItems };
};

export default RecentPublications;
