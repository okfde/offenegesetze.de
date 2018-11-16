import React from 'react';
import Link from 'next/link';

import '@fortawesome/fontawesome-free/css/all.css';

const Footer = () => (
  <footer className="footer" style={{ minHeight: '50vh' }}>
    <div className="container">
      <div className="columns is-desktop">
        <div className="column">
          OffeneGesetze.de ist eine zivilgeselschaftliche Plattsform zur
          Verfügungstellug von amtichen Gesetzesblättern.
          <br />
          <br />
          <a href="https://twitter.com/offenegesetze">
            <span className="icon is-large">
              <i className="fab has-text-black fa-2x fa-twitter" />
            </span>
          </a>
          <a href="https://twitter.com/offenegesetze">
            <span className="icon is-large">
              <i className="fab has-text-black fa-2x fa-facebook" />
            </span>
          </a>
          <a href="https://github.com/topics/offene-gesetze">
            <span className="icon is-large">
              <i className="fab has-text-black fa-2x fa-github" />
            </span>
          </a>
        </div>
        <div className="column">
          <div className="menu">
            <ul className="menu-list">
              <li>
                <Link prefetch href="/ueber">
                  <a href="/ueber">Über OffeneGesetze.de</a>
                </Link>
              </li>
              <li>
                <Link prefetch href="/kontakt">
                  <a href="/kontakt">Kontakt</a>
                </Link>
              </li>
              <li>
                <Link href="/datenschutz">
                  <a href="/Datenschutz">Datenschutz</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="column">
          <ul className="menu-list">
            <li>
              <Link href="/daten">
                <a href="/daten">Daten (API)</a>
              </Link>
            </li>
            <li>
              <Link href="/feeds">
                <a href="/feeds">RSS-Feeds</a>
              </Link>
            </li>
            <li>
              <Link href="/unterstuetzen">
                <a href="/unterstuetzen">Unterstützen</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="column">
          <a href="https://okfn.de/">
            <img
              src="/static/okf.svg"
              alt="OKF logo"
              style={{ width: '20rem' }}
            />
          </a>
        </div>
      </div>
      <div>
        <p className="has-text-grey-light">
          Wir benutzen statt den üblichen externen Dienstleistern die
          datenschutzfreundlichere Technologie von{' '}
          <a href="https://matomo.org">Matomo</a>, um statistische Auswertungen
          der Seitennutzung zu erhalten. Wenn Sie dies nicht wollen,{' '}
          <a href="https://traffic.okfn.de/index.php?module=CoreAdminHome&amp;action=optOut&amp;language=de">
            klicken Sie bitte hier und entfernen Sie den Haken
          </a>. Näheres in{' '}
          <Link href="/datenschutz">
            <a href="/datenschutz">unseren Datenschutzerklärungen</a>
          </Link>.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
