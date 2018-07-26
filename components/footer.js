import React from 'react';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="columns is-desktop">
        <div className="column">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
          adipisci qui esse, distinctio reprehenderit cum iste labore repellat
          fuga. Veritatis unde nobis doloremque dolores non ut provident eaque
          necessitatibus voluptatibus!
          <br />
          <br />
          <a href=".">
            <span className="icon is-large">
              <i className="fab has-text-black fa-2x fa-twitter" />
            </span>
          </a>
          <a href=".">
            <span className="icon is-large">
              <i className="fab has-text-black fa-2x fa-facebook" />
            </span>
          </a>
          <a href=".">
            <span className="icon is-large">
              <i className="fab has-text-black fa-2x fa-github" />
            </span>
          </a>
        </div>
        <div className="column">
          <div className="menu">
            <ul className="menu-list">
              <li>
                <a href="/ueber">Über uns</a>
              </li>
              <li>
                <a href="/kontakt">Kontakt</a>
              </li>
              <li>
                <a href="/datenschutz">Datenschutzerklärung</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="column">
          <ul className="menu-list">
            <li>
              <a href="/api">API</a>
            </li>
            <li>
              <a>Kontakt</a>
            </li>
            <li>
              <a>Datenschutzerklärung</a>
            </li>
          </ul>
        </div>
        <div className="column">
          <img
            src="https://okfn.de/static/images/logo_black.svg"
            alt="OKF logo"
          />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
