import React from 'react';
import fetch from 'isomorphic-unfetch';

import Base from '../components/base';
import Recent from '../components/recent';
import SearchBox from '../components/search-box';
import PricingTable from '../components/pricing-table';

const IndexPage = ({ items }) => (
  <Base hideSearch>
    <div className="hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">OffeneGesetze.de</h1>
          <h2 className="subtitle">Wir öffnen das Bundesgesetzblatt</h2>
        </div>
      </div>
    </div>
    <div className="columns is-desktop">
      <div className="column">
        <div className="div">
          <h2 className="subtitle">Was gibt's hier?</h2>
          <p>
            Das BGBl ist das Veröffentlichungsblatt (Gazette) der BRD. Es
            enthält sozusagen alle Änderungen an der aktuelle Gesetzes- und
            Verordnungslage (= menschen-lesbare Commits/Diffs), die mit
            Veröffentlichung in Kraft treten. In einer idealen Welt, gibt es
            kein BGBl, sondern nur Commits auf ein Gesetzes-Repo (Idee von
            Bundes-Git). Das ist leider gerade unrealistisch. Stattdessen
            sollten wir das aktuelle Angebot verbessern. Die Phrase "tritt mit
            Veröffentlichung in Kraft" stammt aus einer analogen Zeit. Früher
            hieß das: wenn es ausgedruckt und ausgehängt ist. Der Begriff
            "Veröffentlichung" hat sich aber seitdem stark verändert. Der
            Bundesanzeigerverlag "veröffentlicht" das BGBl unter bgbl.de zwar im
            Internet, aber in der schlechtest vorstellbaren Form. Wir erwarten
            mehr von einer Veröffentlichung, gerade wenn diese den Effekt hat,
            die Regeln unseres Zusammenlebens – unsere Gesetzeslage – zu
            verändern. Aktueller Stand der Veröffentlichung Unter bgbl.de stellt
            der Bundesanzeiger Verlag das BGBl in einer "kostenlosen
            Bürgerversion" zur Verfügung, allerdings mit Einschränkungen: PDFs
            sind gesperrt (kein kopieren, kein Drucken) ältere Ausgaben sind nur
            Bild-PDFs (kein Text) keine Suche (nur im Abonnement) keine
            Permalinks keine Daten expliziter Urheberrechtshinweis
          </p>
          <PricingTable />
          <br />
          <p>
            <a href="/forderungen">Mehr über unsere Forderungen</a>
          </p>
          <br />
        </div>
      </div>
      <div className="column">
        <SearchBox />
        {<Recent items={items} />}
      </div>
    </div>
  </Base>
);

IndexPage.getInitialProps = async ({ req }) => {
  try {
    const res = await fetch(
      'https://api.offenegesetze.de/v1/amtsblatt/?limit=3'
    );
    const json = await res.json();
    return {
      items: json.results,
    };
  } catch (error) {
    console.log(error);
    return { items: [] };
  }
};

export default IndexPage;
