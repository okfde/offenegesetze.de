import React from 'react';
import fetch from 'isomorphic-unfetch';

import Base from '../components/base';
import Recent from '../components/recent';
import SearchBox from '../components/search-box';
import PricingTable from '../components/pricing-table';

const IndexPage = ({ items }) => (
  <Base>
    <div className="columns is-desktop">
      <div className="column" />
      <div className="column is-offset-1-mobile is-10-mobile is-half-desktop is-three-fifths-tablet">
        <div className="hero is-primary">
          <div className="hero-body ">
            <h1 className="title">
              Offene Gesetze<br />für eine offene Gesellschaft
            </h1>
            <h2 className="subtitle">Wir öffnen das Bundesgesetzblatt</h2>
          </div>
        </div>
        <h2 className="subtitle">Was gibt es hier?</h2>
        <p>
          Im Bundesgesetzblatt (BGBl) werden alle Gesetze der Bundesrepublik
          Deutschland veröffentlicht. Gesetze treten erst in Kraft, wenn sie
          dort erscheinen. Trotzdem sind die Gesetzblätter nicht offen
          verfügbar. Der privatisierte Bundesanzeiger-Verlag, hinter dem Dumont
          steht, erhebt Urheberrecht auf die Dokumente. Sie sind zwar online auf
          bgbl.de einzeln einsehbar, aber können nicht gedruckt oder kopiert
          werden. Sie sind nicht durchsuchbar, der Bundesanzeiger-Verlag
          verbietet die Weiterverwendung. Wer die Gesetzblätter des Staates
          nutzen will, muss dem privaten Verlag Abo-Gebühren zahlen. Wir
          glauben, dass zentrale Dokumente der Demokratie offen für alle
          bereitstehen müssen. Das Urheberrecht darf der Demokratie nicht im
          Wege stehen. Deswegen stellen wir auf dieser Seite sämtliche
          Bundesgesetzblätter seit 1949 frei, offen und kostenlos zur Verfügung.
        </p>
        <PricingTable />
        <br />
        <p>
          <a className="button is-primary" href="/forderungen">
            Mehr über unsere Forderungen
          </a>
        </p>
        {/* <br /> */}
        {<Recent items={items} />}
      </div>
      <div className="column" />
    </div>
  </Base>
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
