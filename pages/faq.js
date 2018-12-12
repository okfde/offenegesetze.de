import React from 'react';
import Link from 'next/link';

import BaseContent from '../components/layout/base-content';

const Faq = () => (
  <BaseContent>
    <h1 className="title">FAQ – Häufig gestellte Fragen</h1>
    <h3>Kann ich mir auf dieser Seite die aktuell gültigen Gesetze ansehen?</h3>
    <p>
      Nein, <a href="https://de.wikipedia.org/wiki/Amtsblatt">Amtsblätter</a>{' '}
      enthalten nur die Änderungen an den Gesetzen. Für die konsolidierte
      Fassung der Gesetze gibt es z.B.{' '}
      <a className="highlight" href="https://www.gesetze-im-internet.de/">
        Gesetze im Internet
      </a>
      .
    </p>
    <h3>Erlaubt bgbl.de nicht schon einen kostenfreien Zugang?</h3>
    <p>
      Auf bgbl.de gibt es einen sogenannten „kostenlosen Bürgerzugang“. Dort
      gibt es aber keine Such- oder Druckfunktion. Eine Suche über{' '}
      <a
        className="highlight"
        href="https://www.google.de/search?q=site%3Abgbl.de&amp;oq=site%3Abgbl.de"
      >
        Google
      </a>{' '}
      ist teilweise möglich, aber sehr beschränkt, da z.B. keine
      Filtermöglichkeit nach Jahr möglich ist. Die{' '}
      <a
        className="highlight"
        href="https://www.sueddeutsche.de/digital/offene-daten-aktivisten-stellen-alle-bundesgesetzblaetter-ins-netz-1.4246682"
      >
        Süddeutsche Zeitung geht in ihrem Artikel
      </a>{' '}
      näher auf die unterschiedliche Versionen von bgbl.de ein.
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
      <a className="highlight" href="https://okfn.de/">
        Open Knowledge Foundation Deutschland e.V.
      </a>
      .
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
          OffeneGesetze.de/daten
        </a>
      </Link>{' '}
      kann man sämtliche Gesetzblätter oder auch die Gesetzblätter pro Jahr
      herunterladen. Es gibt auch eine Programmierschnittstelle (API), um auf
      die Dokumente zuzgreifen.{' '}
      <i>
        Momentan fehlen vollständige Dokumente für einige Jahrgänge. Wir
        arbeiten daran, diese auch verfügbar zu machen.
      </i>
    </p>
    <h3>
      Warum ist der Text so komisch wenn ich ihn aus älteren PDFs kopiere?
    </h3>
    <p>
      Wir nutzen eine Texterkennungssoftware, um den Text aus den alten
      Dokumenten extrahieren. Aktuell funktioniert das ganz okay um einzelne
      Wörter zu erkennen, hat aber Probleme mit dem Spalten-Layout. Wir sind
      dabei dies noch zu verbessern.
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
