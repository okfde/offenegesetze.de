import React from 'react';

import BaseContent from '../components/base-content';
import PricingTable from '../components/pricing-table';

const Ueber = () => (
  <BaseContent>
    <h1 className="title">Unsere Forderungen</h1>
    <p>
    Im Jahr 2006 wurde der staatliche Bundesanzeiger-Verlag privatisiert. In einem umstrittenen Verfahren sicherte sich der Dumont-Verlag
    das Unternehmen und damit die Veröffentlichung aller Gesetze im Bundesgesetzblatt. Seither erhielt der Verlag ohne Ausschreibung auch 
    den Auftrag zum Betrieb von anderen staatlichen Plattformen.
  
    Das Bundesgesetzblatt ist für den Bundesanzeiger-Verlag lukrativ. Er verlangt für grundlegende Funktionen, zum Beispiel die 
    Durchsuchbarkeit oder das Drucken von Gesetzblättern Gebühren. Mit dieser Plattform ändern wir das. Alle Gesetzblätter sind auf 
    offenegesetze.de frei zugänglich.
    
    Die Bundesregierung muss dafür sorgen, dass private Verlage nicht das Urheberrecht auf staatliche Dokumente beanspruchen dürfen.
    Amtliche Dokumente müssen frei und kostenlos online für die gesamte Öffentlichkeit zugänglich sein! 
    Monopolisten dürfen nicht für den Zugang zu staatlichen Daten zur Kasse bitten!
    Das Urheberrecht muss geändert werden, damit zentrale Dokumente der Demokratie offen bereitstehen!


    </p>
    <PricingTable />
    <br />
    <p>
      <a href="/ueber">Mehr über unsere Forderungen</a>
    </p>
  </BaseContent>
);

export default Ueber;
