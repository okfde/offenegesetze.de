import React from 'react';

import BaseContent from '../components/base-content';
import PricingTable from '../components/pricing-table';

const Ueber = () => (
  <BaseContent>
    <h1 className="title">Warum OffeneGesetze.de?</h1>
    <p>
      Im Jahr 2006 wurde der staatliche Bundesanzeiger-Verlag privatisiert. In
      einem umstrittenen Verfahren sicherte sich der Dumont-Verlag das
      Unternehmen und damit die Veröffentlichung aller Gesetze im
      Bundesgesetzblatt. Seither erhielt der Verlag ohne Ausschreibung auch den
      Auftrag zum Betrieb von anderen staatlichen Plattformen. Das
      Bundesgesetzblatt ist für den Bundesanzeiger-Verlag lukrativ. Er verlangt
      für grundlegende Funktionen, zum Beispiel die Durchsuchbarkeit oder das
      Drucken von Gesetzblätter, Gebühren.
      <br /> <br />
      Mit dieser Plattform ändern wir das.
      <br /> <br />
      Alle Gesetzblätter sind auf offenegesetze.de frei zugänglich. Die
      Bundesregierung muss dafür sorgen, dass private Verlage nicht das
      Urheberrecht auf staatliche Dokumente beanspruchen dürfen. Amtliche
      Dokumente müssen frei und kostenlos online für die gesamte Öffentlichkeit
      zugänglich sein! Monopolisten dürfen nicht für den Zugang zu staatlichen
      Daten zur Kasse bitten! Das Urheberrecht muss geändert werden, damit
      zentrale Dokumente der Demokratie offen bereitstehen!
    </p>
    <PricingTable />
    <br />
    <h2>Fragen und Antworten</h2>
    <h3>Was sind Amtsblätter</h3>
    <p>
      Das sind die offiziellen Bekanntmachungen des Staates, man könnte sagen,
      die Facebook-Posts Staats. Schon seit hunderten Jahren war es der wge
    </p>
    <h3>Wer seid ihr?</h3>
    <p>
      Wir sind drei Dudes von <a href="https://fragdenstaat.de">FragDenStaat</a>:{' '}
      <a href="https://johannesfilter.com">Johannes</a>,{' '}
      <a href="https://stefanwehrmeyer.com">Stefan</a> und{' '}
      <a href="https://twitter.com/arnesemsrott">Arne</a>.
    </p>
  </BaseContent>
);

export default Ueber;
