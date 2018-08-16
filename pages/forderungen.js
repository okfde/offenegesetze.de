import React from 'react';

import BaseContent from '../components/base-content';
import PricingTable from '../components/pricing-table';

const Ueber = () => (
  <BaseContent>
    <h1 className="title">Unsere Forderungen</h1>
    <p>
      Das BGBl ist das Veröffentlichungsblatt (Gazette) der BRD. Es enthält
      sozusagen alle Änderungen an der aktuelle Gesetzes- und Verordnungslage (=
      menschen-lesbare Commits/Diffs), die mit Veröffentlichung in Kraft treten.
      In einer idealen Welt, gibt es kein BGBl, sondern nur Commits auf ein
      Gesetzes-Repo (Idee von Bundes-Git). Das ist leider gerade unrealistisch.
      Stattdessen sollten wir das aktuelle Angebot verbessern. Die Phrase "tritt
      mit Veröffentlichung in Kraft" stammt aus einer analogen Zeit. Früher hieß
      das: wenn es ausgedruckt und ausgehängt ist. Der Begriff
      "Veröffentlichung" hat sich aber seitdem stark verändert. Der
      Bundesanzeigerverlag "veröffentlicht" das BGBl unter bgbl.de zwar im
      Internet, aber in der schlechtest vorstellbaren Form. Wir erwarten mehr
      von einer Veröffentlichung, gerade wenn diese den Effekt hat, die Regeln
      unseres Zusammenlebens – unsere Gesetzeslage – zu verändern. Aktueller
      Stand der Veröffentlichung Unter bgbl.de stellt der Bundesanzeiger Verlag
      das BGBl in einer "kostenlosen Bürgerversion" zur Verfügung, allerdings
      mit Einschränkungen: PDFs sind gesperrt (kein kopieren, kein Drucken)
      ältere Ausgaben sind nur Bild-PDFs (kein Text) keine Suche (nur im
      Abonnement) keine Permalinks keine Daten expliziter Urheberrechtshinweis
    </p>
    <PricingTable />
    <br />
    <p>
      <a href="/ueber">Mehr über unsere Forderungen</a>
    </p>
  </BaseContent>
);

export default Ueber;
