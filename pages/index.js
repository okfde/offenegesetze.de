import React from 'react';
import fetch from 'isomorphic-unfetch';

import BaseIndex from '../components/base-index';
import Recent from '../components/index/recent';
import PricingTable from '../components/pricing-table';
import Substancials from '../components/index/substancials';

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
              <div className="hero-image-wrapper">
                <a href="/veroeffentlichung/bgbl1-1949-1-1/">
                  <img
                    className="hero-image"
                    src="/static/bgbl1_1949.png"
                    alt="Ausschnitt der 1. Ausgabe des BGBl Teil 1 vom 23. Mai 2949"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section section-info">
      <div className="container">
        <div className="columns is-desktop content is-normal">
          <div className="column">
            <h3 className="subtitle">Das Bundesgesetzblatt</h3>
            <p>
              Im Bundesgesetzblatt (BGBl) werden alle Gesetze der Bundesrepublik
              Deutschland veröffentlicht. Gesetze treten erst in Kraft, wenn sie
              dort erscheinen. Herausgeber ist der Bundesanzeiger-Verlag, der
              2006 privatisiert wurde.
            </p>
          </div>
          <div className="column">
            <h3 className="subtitle">Der Bundesanzeiger Verlag</h3>
            Der Bundesanzeiger-Verlag gehört der Dumont-Verlagsgruppe. Er erhebt
            Urheberrecht auf die Dokumente des Bundesgesetzblatts. Diese sind
            zwar online auf bgbl.de einzeln einsehbar, aber können nicht
            gedruckt, durchsucht oder kopiert werden. Der Bundesanzeiger-Verlag
            verbietet die Weiterverwendung. Wer die Gesetzblätter des Staates
            nutzen will, muss dem privaten Verlag Abo-Gebühren zahlen.
          </div>
          <div className="column">
            <h3 className="subtitle">Offene Gesetze</h3>
            Zentrale Dokumente der Demokratie müssen offen für alle
            bereitstehen. Das Urheberrecht darf der Demokratie nicht im Wege
            stehen. Deswegen stellen wir auf dieser Seite sämtliche
            Bundesgesetzblätter seit 1949 frei, offen und kostenlos zur
            Verfügung.
          </div>
        </div>
      </div>
    </div>
    <div className="section section-action">
      <div className="container">
        <div className="columns is-desktop content is-medium">
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
    <div className="section section-comparison">
      <div className="container">
        <PricingTable />
      </div>
    </div>

    <div className="section section-process">
      <div className="container content is-normal">
        <div className="columns is-mobile">
          <div className="column is-full">
            <h2>Wie tritt ein Gesetz in Kraft?</h2>
          </div>
        </div>

        <div className="columns is-mobile">
          <div className="column is-half">
            <h3>1. Gesetzgebungsinitiative</h3>
          </div>
          <div className="column is-half">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
            ducimus blanditiis ex aut minima dolore voluptate exercitationem
            nihil fuga nostrum et beatae, saepe dolorem iure veritatis alias
            mollitia vitae officiis.
          </div>
        </div>
        <div className="columns is-mobile">
          <div className="column is-half">
            <h3>2. Beratung und Zustimmung</h3>
          </div>
          <div className="column is-half">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
            ducimus blanditiis ex aut minima dolore voluptate exercitationem
            nihil fuga nostrum et beatae, saepe dolorem iure veritatis alias
            mollitia vitae officiis.
          </div>
        </div>
        <div className="columns is-mobile">
          <div className="column is-half">
            <h3>3. Gegenzeichnung</h3>
          </div>
          <div className="column is-half">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
            ducimus blanditiis ex aut minima dolore voluptate exercitationem
            nihil fuga nostrum et beatae, saepe dolorem iure veritatis alias
            mollitia vitae officiis.
          </div>
        </div>
        <div className="columns is-mobile">
          <div className="column is-half">
            <h3>4. Ausfertigung</h3>
          </div>
          <div className="column is-half">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
            ducimus blanditiis ex aut minima dolore voluptate exercitationem
            nihil fuga nostrum et beatae, saepe dolorem iure veritatis alias
            mollitia vitae officiis.
          </div>
        </div>
        <div className="columns is-mobile">
          <div className="column is-half">
            <h3>5. Verkündung</h3>
          </div>
          <div className="column is-half">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
            ducimus blanditiis ex aut minima dolore voluptate exercitationem
            nihil fuga nostrum et beatae, saepe dolorem iure veritatis alias
            mollitia vitae officiis.
          </div>
        </div>
      </div>
    </div>

    <Substancials />
    <Recent items={items} />
  </BaseIndex>
);

IndexPage.getInitialProps = async () => {
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
