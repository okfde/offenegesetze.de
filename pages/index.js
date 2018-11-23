import React from 'react';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

import BaseIndex from '../components/layout/base-index';
import Recent from '../components/index/recent';
import PricingTable from '../components/index/pricing-table';
import Substancials from '../components/index/substancials';

const IndexPage = ({ items }) => (
  <BaseIndex>
    <div className="hero is-medium is-primary">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-desktop">
            <div className="column content is-large">
              <h2 className="subtitle">Freier Zugang zu unseren Gesetzen.</h2>

              <p className="content">
                Ein privater Verlag bestimmt darüber, wie unsere Gesetze in
                Kraft treten. Wer deutsche Gesetzesblätter durchsuchen, kopieren oder ausdrucken
                will, wird zur Kasse gebeten.
              </p>
              <p className="title is-2">Das ändern wir!</p>
              <p className="content">
                Wir stellen das Bundesgesetzblatt in digitaler Form kostenfrei
                zur Verfügung.
              </p>
            </div>
            <div className="column hero-image-column">
              <div className="hero-image-wrapper">
                <Link href="/veroeffentlichung/bgbl1/1949/1/#page=1">
                  <a href="/veroeffentlichung/bgbl1/1949/1/#page=1">
                    <img
                      className="hero-image"
                      src="/static/bgbl1_1949.png"
                      alt="Ausschnitt der 1. Ausgabe des BGBl Teil 1 vom 23. Mai 2949"
                    />
                  </a>
                </Link>
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
              Im Bundesgesetzblatt (BGBl.) werden alle Gesetze der
              Bundesrepublik Deutschland veröffentlicht. Gesetze treten erst in
              Kraft, wenn sie dort erscheinen. Herausgeber ist der
              Bundesanzeiger Verlag, der 2006 privatisiert wurde. 
              Er gehört zur Dumont-Verlagsgruppe.
            </p>
          </div>
          <div className="column">
            <h3 className="subtitle">Der Bundesanzeiger Verlag</h3>
            Der Verlag erhebt Urheberrecht auf die Datenbank der Gesetzblätter. Diese sind
            zwar <a href="https://www.bgbl.de/">online einzeln einsehbar</a>, aber können nicht
            gedruckt, durchsucht oder kopiert werden. Der Bundesanzeiger Verlag
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
            Alle Gesetzesblätter auf einer Website. Kostenlos, digital, offen.
            
            BUTTON: Gesetze entdecken, Link zu Veröffentlichung
            BUTTON: Mehr erfahren, Link zu Warum?
          </div>
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
            Die Bundesregierung, der Bundestag oder der Bundesrat starten eine Initiative für ein neues Gesetz.
          </div>
        </div>
        <div className="columns is-mobile">
          <div className="column is-half">
            <h3>2. Beratung und Zustimmung</h3>
          </div>
          <div className="column is-half">
            Der Bundestag und der Bunderat beraten über den Gesetzentwurf und verabschieden ihn, meist mit Änderungen.
          </div>
        </div>
        <div className="columns is-mobile">
          <div className="column is-half">
            <h3>3. Gegenzeichnung</h3>
          </div>
          <div className="column is-half">
            Die Bundesregierung zeichnet den Gesetzentwurf gegen. 
          </div>
        </div>
        <div className="columns is-mobile">
          <div className="column is-half">
            <h3>4. Ausfertigung</h3>
          </div>
          <div className="column is-half">
            Der Bundespräsident fertigt das Gesetz aus und unterzeichnet es.
          </div>
        </div>
        <div className="columns is-mobile">
          <div className="column is-half">
            <h3>5. Verkündung</h3>
          </div>
          <div className="column is-half">
            Das Gesetz wird im Bundesgesetzblatt verkündet. Der zuständige Bundesanzeiger Verlag ist ein privater Verlag. Er verbietet die Weiterverwendung der Gesetzesblätter online.
          </div>
        </div>
      </div>
    </div>

    <div className="section">
      <div className="container content is-normal">
        <h3 className="is-size-3 has-text-center">
          Bedeutende Veröffentlichungen
        </h3>
        <Substancials highlight />

        <Link href="/veroeffentlichung/#bedeutende">
          <a className="button is-primary">
            Alle Bedeutende Veröffentlichungen ansehen
          </a>
        </Link>
      </div>
    </div>
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
