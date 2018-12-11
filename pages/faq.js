import React from 'react';
import Link from 'next/link';

import BaseContent from '../components/layout/base-content';

const Faq = () => (
  <BaseContent>
    <h1 className="title">FAQ – Häufig gestellte Fragen</h1>
    <h3>Kann ich mir auf dieser Seite die aktuell gültigen Gesetze ansehen?</h3>
    <p>
      Nein, <a href="https://de.wikipedia.org/wiki/Amtsblatt">Amtsblätter</a>{' '}
      enthalten nur die Änderungen an den Gesetzen. Für die konsolidierte Fassung der Gesetze gibt es z.B.{' '}
      <a href="https://www.gesetze-im-internet.de/">Gesetze im Internet</a>.
    </p>
    <h3>Was ist der Unterschied zwischen BGBl. Teil I und Teil II?</h3>
    <p>
      Das Bundesgesetzblatt besteht aus zwei Teilen. In Teil I werden
      Rechtsvorschriften wie Gesetze und Verordnungen veröffentlicht. Teil II
      enthält völkerrechtliche und andere internationale Abkommen.
    </p>
    <h3>Wer steckt hinter dem Projekt?</h3>
    <p>
      Der gemeinnützige{' '}
      <a href="http://okfn.de/">Open Knowledge Foundation Deutschland e.V.</a>.
    </p>
    <h3>Wollt ihr damit Geld verdienen?</h3>
    <p>
      Nein. Die Plattform dient dazu, allen Menschen freien Zugang zu
      Bundesgesetzblättern zu verschaffen.
    </p>
    <h3>Kann ich die Dokumente gesammelt herunterladen?</h3>
    <p>
      Ja. Unter{' '}
      <Link prefetch href="/daten">
        <a href="/daten" className="highlight">
          offenegesetze.de/daten
        </a>
      </Link>{' '}
      kann man sämtliche Gesetzblätter oder auch die Gesetzblätter pro Jahr
      herunterladen. Es gibt auch eine Programmierschnittstelle (API), um auf
      die Dokumente zuzgreifen.{' '}
    </p>
    <br />
    <br />
    <p>
      Bei weiteren Fragen können Sie{' '}
      <Link prefetch href="/kontakt">
        <a href="/kontakt" className="highlight">
          Kontakt
        </a>
      </Link>{' '}
      zu uns aufnehmen.
    </p>
  </BaseContent>
);

export default Faq;
