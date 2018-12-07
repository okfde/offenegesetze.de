import React from 'react';
import Link from 'next/link';

import BaseContent from '../components/layout/base-content';

const Presse = () => (
  <BaseContent>
    <h1 className="title">Presse</h1>
    <p>Presseanfragen bitte an Arne Semsrott, info@offenegesetze.de, Telefon: 030 57703666 0</p>
    <h2>OffeneGesetze - zentrale Dokumente der Demokratie erstmals frei zugänglich</h2>
    <p>Berlin, 10.12.2018 - Die Bundesgesetzblätter sind die zentralen Dokumente der deutschen Demokratie. Unter OffeneGesetze.de sind sie jetzt erstmals frei zugänglich. Auf dem Portal stellt die gemeinnützige Open Knowledge Foundation Deutschland die Dokumente kostenfrei und zur freien Weiterverwendung bereit.</p>
    <p>Bisher sind Bundesgesetzblätter nur über die Website bgbl.de des Bundesanzeiger Verlags verfügbar. Der private Verlag verlangt für grundlegende Funktionen, zum Beispiel die Durchsuchbarkeit oder das Drucken von Gesetzblättern, Abogebühren. Eine Weiterverwendung der Dokumente untersagt der Verlag mit Verweis auf das Urheberrecht. </p>
    <p>Arne Semsrott, Projektleiter Open Knowledge Foundation Deutschland: “Das Urheberrecht darf der Demokratie nicht im Wege stehen. Daten und Dokumente des Staates müssen frei für alle Menschen zugänglich sein. Wenn das Justizministerium nicht dafür sorgt, muss eben die Zivilgesellschaft einspringen.”</p>
    <p>Der vormals staatliche Bundesanzeiger Verlag wurde 2006 privatisiert. In einem umstrittenen Verfahren sicherte sich der Dumont-Verlag das Unternehmen. Die genauen Bedingungen der Kooperation des Bundes mit dem Verlag hält das zuständige Justizministerium geheim. Neben dem Vertrieb des Bundesgesetzblatts erhielt der Verlag ohne Ausschreibung auch den Auftrag zum Betrieb von anderen staatlichen Plattformen, zum Beispiel dem Transparenzregister.</p>
    <p>Durch die Funktionen von OffeneGesetze.de, etwa den Gesamt-Download aller Bundesgesetzblätter seit 1949, wird es erstmals möglich, den Textbestand der Gesetzblätter zu analysieren und Veränderungen in Gesetzen der letzten Jahrzehnte nachzuvollziehen. Außerdem können anders als bisher einzelne Dokumente verlinkt und durchsucht werden. Auf der offiziellen Seite des Bundesanzeiger Verlags ist hingegen zum Beispiel das erste Bundesgesetzblatt, die Verkündung des Grundgesetzes 1949, nur als schiefer Bilderscan vorhanden.</p>
  </BaseContent>
);

export default Presse;
