import React from 'react';
import Link from 'next/link';

const Footer = () => (
  <footer className="footer" style={{ minHeight: '50vh' }}>
    <div className="container">
      <div className="columns is-desktop">
        <div className="column">
          OffeneGesetze.de ist eine zivilgesellschaftliche, ehrenamtliche
          Plattform für amtliche Gesetzesblätter.
          <br />
          <br />
          <a href="https://twitter.com/offenegesetze">
            <span className="icon is-large">
              <i className="fab has-text-black fa-2x fa-twitter" />
            </span>
            <span className="is-sr-only">Twitter</span>
          </a>
          <a href="https://www.facebook.com/offenegesetze">
            <span className="icon is-large">
              <i className="fab has-text-black fa-2x fa-facebook" />
            </span>
            <span className="is-sr-only">Facebook</span>
          </a>
          <a href="https://github.com/topics/offene-gesetze">
            <span className="icon is-large">
              <i className="fab has-text-black fa-2x fa-github" />
            </span>
            <span className="is-sr-only">GitHub</span>
          </a>
          <a href="https://www.instagram.com/offenegesetze.de/">
            <span className="icon is-large">
              <i className="fab has-text-black fa-2x fa-instagram" />
            </span>
            <span className="is-sr-only">Instagram</span>
          </a>
          <a href="https://chaos.social/@offenegesetze">
            <span className="icon is-large">
              <i className="fab has-text-black fa-2x fa-mastodon" />
            </span>
            <span className="is-sr-only">Mastodon</span>
          </a>
        </div>
        <div className="column">
          <div className="menu">
            <ul className="menu-list">
              <li>
                <Link href="/faq">
                  <a href="/faq">FAQ</a>
                </Link>
              </li>
              <li>
                <Link href="/kontakt">
                  <a href="/kontakt">Kontakt & Impressum</a>
                </Link>
              </li>
              <li>
                <Link href="https://okfn.de/impressum/#datenschutzerkl%C3%A4rung">
                  <a href="https://okfn.de/impressum/#datenschutzerkl%C3%A4rung">
                    Datenschutzerklärung
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="column">
          <ul className="menu-list">
            <li>
              <Link href="/daten">
                <a href="/daten">Download & API</a>
              </Link>
            </li>
            <li>
              <Link href="/feeds">
                <a href="/feeds">RSS-Feeds</a>
              </Link>
            </li>
            <li>
              <Link href="/presse">
                <a href="/presse">Presse</a>
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
        <p>
          <small>
            Wir benutzen statt den üblichen externen Dienstleistern die
            datenschutzfreundlichere Technologie von{' '}
            <a href="https://matomo.org">Matomo</a>, um statistische
            Auswertungen der Seitennutzung zu erhalten. Wenn Sie dies nicht
            wollen,{' '}
            <a href="https://traffic.okfn.de/index.php?module=CoreAdminHome&amp;action=optOut&amp;language=de">
              klicken Sie bitte hier und entfernen Sie den Haken
            </a>
            . Näheres in{' '}
            <Link href="/datenschutz">
              <a href="/datenschutz">unseren Datenschutzerklärungen</a>
            </Link>
            .
          </small>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
