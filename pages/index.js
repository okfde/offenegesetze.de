import React from 'react';
import fetch from 'isomorphic-unfetch';

import BaseIndex from '../components/base-index';
import Recent from '../components/recent';
import PricingTable from '../components/pricing-table';

const IndexPage = ({ items }) => (
  <BaseIndex>
    <div
      style={{
        backgroundColor: '#75DAFF',
        paddingBottom: '3rem',
        paddingTop: '3rem',
        color: 'white',
      }}
    >
      <div className="container">
        <div className="columns is-desktop">
          <div className="column">
            <h1 className="title">
              Offene Gesetze<br />für eine offene Gesellschaft
            </h1>
            <h2 className="subtitle">Wir öffnen das Bundesgesetzblatt</h2>

            <h2 className="subtitle">Was gibt es hier?</h2>
            <p>
              Im Bundesgesetzblatt (BGBl) werden alle Gesetze der Bundesrepublik
              Deutschland veröffentlicht. Gesetze treten erst in Kraft, wenn sie
              dort erscheinen. Trotzdem sind die Gesetzblätter nicht offen
              verfügbar. Der privatisierte Bundesanzeiger-Verlag, hinter dem
              Dumont steht, erhebt Urheberrecht auf die Dokumente. Sie sind zwar
              online auf bgbl.de einzeln einsehbar, aber können nicht gedruckt
              oder kopiert werden. Sie sind nicht durchsuchbar, der
              Bundesanzeiger-Verlag verbietet die Weiterverwendung. Wer die
              Gesetzblätter des Staates nutzen will, muss dem privaten Verlag
              Abo-Gebühren zahlen. Wir glauben, dass zentrale Dokumente der
              Demokratie offen für alle bereitstehen müssen. Das Urheberrecht
              darf der Demokratie nicht im Wege stehen. Deswegen stellen wir auf
              dieser Seite sämtliche Bundesgesetzblätter seit 1949 frei, offen
              und kostenlos zur Verfügung.
            </p>
          </div>
          <div className="column">
            <img src="/static/christa-dodoo-485704-unsplash.jpg" />
          </div>
        </div>
      </div>
    </div>
    <div
      style={{
        backgroundColor: 'lightgrey',
        paddingBottom: '3rem',
        paddingTop: '3rem',
      }}
    >
      <div className="container">
        <div className="columns is-desktop">
          <div className="column">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
            ducimus blanditiis ex aut minima dolore voluptate exercitationem
            nihil fuga nostrum et beatae, saepe dolorem iure veritatis alias
            mollitia vitae officiis.
          </div>
          <div className="column">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
            ducimus blanditiis ex aut minima dolore voluptate exercitationem
            nihil fuga nostrum et beatae, saepe dolorem iure veritatis alias
            mollitia vitae officiis.
          </div>
          <div className="column">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
            ducimus blanditiis ex aut minima dolore voluptate exercitationem
            nihil fuga nostrum et beatae, saepe dolorem iure veritatis alias
            mollitia vitae officiis.
          </div>
        </div>
      </div>
    </div>
    <div
      style={{
        backgroundColor: 'blue',
        color: 'white',
        paddingBottom: '3rem',
        paddingTop: '3rem',
      }}
    >
      <div className="container">
        <div className="columns is-desktop">
          <div className="column">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
            ducimus blanditiis ex aut minima dolore voluptate exercitationem
            nihil fuga nostrum et beatae, saepe dolorem iure veritatis alias
            mollitia vitae officiis.
          </div>
          <div className="column">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
            ducimus blanditiis ex aut minima dolore voluptate exercitationem
            nihil fuga nostrum et beatae, saepe dolorem iure veritatis alias
            mollitia vitae officiis.
          </div>
          <div className="column">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
            ducimus blanditiis ex aut minima dolore voluptate exercitationem
            nihil fuga nostrum et beatae, saepe dolorem iure veritatis alias
            mollitia vitae officiis.
          </div>
        </div>
      </div>
    </div>
    <div
      style={{
        backgroundColor: 'grey',
        paddingBottom: '3rem',
        paddingTop: '3rem',
      }}
    >
      <div className="container">
        <PricingTable />
      </div>
    </div>
    <div style={{ backgroundColor: 'white' }}>
      <div className="container">{<Recent items={items} />}</div>
    </div>
  </BaseIndex>
);

IndexPage.getInitialProps = async ({ req }) => {
  try {
    const res = await fetch(
      'https://api.offenegesetze.de/v1/veroeffentlichung/'
    );
    const json = await res.json();
    return {
      items: json.results.slice(0, 5),
    };
  } catch (error) {
    console.log(error);
    return { items: [] };
  }
};

export default IndexPage;
