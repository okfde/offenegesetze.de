import React from 'react';
import fetch from 'isomorphic-unfetch';

import { relative } from 'path';
import BaseIndex from '../components/base-index';
import Recent from '../components/recent';
import PricingTable from '../components/pricing-table';

const IndexPage = ({ items }) => (
  <BaseIndex>
    <div className="hero is-medium is-primary">
      <div className="container">
        <h1 className="title">
          Offene Gesetze<br />für eine offene Gesellschaft
        </h1>
      </div>
      <div className="hero-body">
        <div className="container">
          <div className="columns is-desktop">
            <div className="column content is-large">
              <h2 className="subtitle">Wir öffnen das Bundesgesetzblatt.</h2>

              <p className="content">
                Ein privater Verlag bestimmt darüber, wie unsere Gesetze in
                Kraft treten. Wer die Gesetze durchsuchen, kopieren oder
                ausdrucken will, wird zur Kasse gebeten.
              </p>
              <p className="title is-2">Schluss damit!</p>
              <p className="content">
                Wir stellen das Bundesgesetzblatt in moderner Form kostenfrei
                zur Verfügung.
              </p>
            </div>
            <div className="column hero-image-column">
              <img
                className="hero-image"
                src="/static/bgbl1_1949.png"
                alt="Ausschnitt der 1. Ausgabe des BGBl Teil 1 vom 23. Mai 2949"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      style={{
        backgroundColor: 'lightgrey',
        paddingBottom: '3rem',
        paddingTop: '3rem',
        position: 'relative',
      }}
    >
      <div className="container">
        <div className="columns is-desktop content is-medium">
          <div className="column">
            <h3 className="subtitle">Das Bundesgesetzblatt</h3>
            <p>
              Im Bundesgesetzblatt (BGBl) werden alle Gesetze der Bundesrepublik
              Deutschland veröffentlicht. Gesetze treten erst in Kraft, wenn sie
              dort erscheinen.
            </p>
          </div>
          <div className="column">
            <h3 className="subtitle">Der Bundesanzeiger Verlag</h3>
            Der Bundesanzeiger-Verlag wurde 2006 privatisiert und gehört der
            Dumont-Verlagsgruppe. Er erhebt Urheberrecht auf die Dokumente des
            Bundesgesetzblatts. Sie sind zwar online auf bgbl.de einzeln
            einsehbar, aber können nicht gedruckt oder kopiert werden. Sie sind
            nicht durchsuchbar, der Bundesanzeiger-Verlag verbietet die
            Weiterverwendung. Wer die Gesetzblätter des Staates nutzen will,
            muss dem privaten Verlag Abo-Gebühren zahlen. Wir glauben, dass
            zentrale Dokumente der Demokratie offen für alle bereitstehen
            müssen. Das Urheberrecht darf der Demokratie nicht im Wege stehen.
            Deswegen stellen wir auf dieser Seite sämtliche Bundesgesetzblätter
            seit 1949 frei, offen und kostenlos zur Verfügung.
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
