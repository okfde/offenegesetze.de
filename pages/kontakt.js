import React from 'react';

import BaseContent from '../components/layout/base-content';

const people = [
  ['Arne Semsrott', 'https://twitter.com/arnesemsrott'],
  ['Stefan Wehrmeyer', 'https://stefanwehrmeyer.com'],
  ['Johannes Filter', 'https://johannesfilter.com'],
];

const Ueber = () => (
  <BaseContent>
    <h1 className="title">Kontakt</h1>
    <p>
      Offene Gesetze ist ein ehrenamtliches Projekt des gemeinnützigen Open
      Knowledge Foundation Deutschland e.V. Das Projekt wurde entwickelt von:
      <ul>
        {people
          .map((a) => ({ sort: Math.random(), value: a }))
          .sort((a, b) => a.sort - b.sort)
          .map((a) => a.value)
          .map((x) => (
            <li>
              <a href={x[1]}>{x[0]}</a>
            </li>
          ))}
      </ul>
      Das Team ist erreichbar unter{' '}
      <a className="highlight" href="mailto:info@OffeneGesetze.de">
        info@offenegesetze.de
      </a>
      .<br />
    </p>
    <br />
    <p>
      Bitte{' '}
      <a className="highlight" href="https://twitter.com/offenegesetze">
        folg' uns auf Twitter
      </a>{' '}
      und{' '}
      <a className="highlight" href="https://www.facebook.com/offenegesetze/">
        like uns auf Facebook
      </a>
      , um auf dem Laufendem zu bleiben.
    </p>
    <h2>Impressum</h2>
    <br />
    <dl>
      <dt>Vereinsadresse:</dt>
      <dd>
        Open Knowledge Foundation Deutschland e.V.
        <br />
        Singerstr. 109
        <br />
        10179 Berlin
        <br />
        Deutschland
        <br />
        <br />
      </dd>
    </dl>
    <dl>
      Vereinsregister Nr: VR 30468 B <br /> <br />
      Umsatzsteuernummer: DE278022128 <br /> <br />
      Registergericht: Amtsgericht Berlin <br /> <br />
      Vertretungsberichtiger Vorstand: Andreas Pawelke, Daniel Dietrich, Jana
      Wichmann, Kristina Klein, Julia Reda, Lea Gimpel, Gabriele C. Klug, Stefan
      Heumann. <br /> <br />
      E-Mail: <a href="mailto:info@okfn.de">info@okfn.de</a> (
      <a href="https://pgp.mit.edu/pks/lookup?op=get&amp;search=0xFE54F46F21DDAED1">
        OpenPGP
      </a>
      )<br /> <br />
      Telefon: <a href="tel:+49 30 57703666 2">+49 30 57703666 0</a> <br />{' '}
      <br />
      Fax: <a href="fax:+49 30 57703666 9">+49 30 57703666 9</a>
    </dl>
  </BaseContent>
);

export default Ueber;
