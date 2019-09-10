import React from 'react';
import Link from 'next/link';

import BaseContent from '../components/layout/base-content';

const Feeds = () => (
  <BaseContent>
    <h1 className="title">Feeds</h1>
    <p>
      Um auf dem neustem Stand zu bleiben, kannst du unsere{' '}
      <a href="https://de.wikipedia.org/wiki/RSS_(Web-Feed)">RSS-Feeds</a>{' '}
      abbonieren.
    </p>
    <ul>
      <li>
        <a
          className="highlight"
          href="https://api.offenegesetze.de/v1/veroeffentlichung/?format=rss"
        >
          Alle Veröffentlichungen
        </a>
      </li>
      <li>
        <a
          className="highlight"
          href="https://api.offenegesetze.de/v1/veroeffentlichung/?format=rss&kind=bgbl1"
        >
          Nur BGBl. I
        </a>
      </li>
      <li>
        <a
          className="highlight"
          href="https://api.offenegesetze.de/v1/veroeffentlichung/?format=rss&kind=bgbl2"
        >
          Nur BGBl. II
        </a>
      </li>
    </ul>
    <p>
      Darüber hinaus bieten wir spezialisierte Feeds für Suchergebnisse an.
      Dafür bitte unsere{' '}
      <Link href="/suche">
        <a className="highlight" href="/suche">
          Suche
        </a>
      </Link>{' '}
      benutzen und dort abonnieren.
    </p>
    <p>
      Um Updates per E-Mail zu erhalten, kann man sich via z.B. mit{' '}
      <a
        className="highlight"
        href="https://ifttt.com/applets/147561p-rss-feed-to-email"
      >
        IFTTT
      </a>{' '}
      E-Mails schicken lassen.
    </p>
  </BaseContent>
);

export default Feeds;
