import React from 'react';

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
                <a href="/ueber">Über OffeneGesetze.de</a>
              </li>
              <li>
                <a href="/kontakt">Kontakt</a>
              </li>
              <li>
                <a href="/datenschutz">Datenschutz</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="column">
          <ul className="menu-list">
            <li>
              <a href="/daten">Daten (API)</a>
            </li>
            <li>
              <a href="/feeds">RSS-Feeds</a>
            </li>
            <li>
              <a href="/unterstuetzen">Unterstützen</a>
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
    </div>
  </footer>
);

export default Footer;
