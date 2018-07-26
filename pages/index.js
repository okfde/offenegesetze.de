import React from 'react';
import fetch from 'isomorphic-unfetch';

import Base from '../components/base';
import Recent from '../components/recent';

const IndexPage = ({ items }) => (
  <Base isRoot>
    <h1>Hello World</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
      provident. Beatae ipsum error blanditiis sit autem rerum cum, qui quis
      officia, dolor non corporis ab, quod possimus ratione voluptas molestiae!
    </p>
    <div className="field has-addons">
      <div className="control is-expanded">
        <input className="input" type="text" placeholder="Find a repository" />
      </div>
      <div className="control">
        <a className="button is-info">Search</a>
      </div>
    </div>
    <div className="columns">
      <div className="column">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
        provident. Beatae ipsum error blanditiis sit autem rerum cum, qui quis
        officia, dolor non corporis ab, quod possimus ratione voluptas
        molestiae!{' '}
      </div>
      <div className="column">{<Recent items={items} />}</div>
    </div>
  </Base>
);

IndexPage.getInitialProps = async ({ req }) => {
  const res = await fetch('https://fragdenstaat.de/api/v1/request/');
  const json = await res.json();
  return { items: json.objects };
};

export default IndexPage;
