import React from 'react';
import fetch from 'isomorphic-unfetch';

import Base from '../components/base';
import Recent from '../components/recent';
import SearchBox from '../components/search-box';

const IndexPage = ({ items }) => (
  <Base hideSearch>
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">OffeneGesetze.de</h1>
          <h2 className="subtitle">Wir. öffnen. Deutschlands. Daten.</h2>
        </div>
      </div>
    </section>
    <div className="columns is-desktop">
      <div className="column">
        <section className="section">
          <h2 className="subtitle">Was gibt's hier?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            provident. Beatae ipsum error blanditiis sit autem rerum cum, qui
            quis officia, dolor non corporis ab, quod possimus ratione voluptas
            molestiae!
          </p>
          <br />
          <SearchBox />
        </section>
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
