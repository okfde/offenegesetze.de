import React from 'react';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

const Nav = () => (
  <nav className="navbar is-fixed-top is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://static.frag-den-staat.de/static/img/logo/logo.5a7991d73eb7.svg"
            alt="OffeneGesetze"
            width="28"
            height="28"
          />
        </a>
        <div
          className="navbar-burger burger"
          data-target="navbarExampleTransparentExample"
        >
          <span />
          <span />
          <span />
        </div>
      </div>

      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="https://bulma.io/">
            OffeneGesetze.de
          </a>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link" href="/documentation/overview/start/">
              Docs
            </a>
            <div className="navbar-dropdown is-boxed">
              <a className="navbar-item" href="/documentation/overview/start/">
                Overview
              </a>
              <a
                className="navbar-item"
                href="https://bulma.io/documentation/modifiers/syntax/"
              >
                Modifiers
              </a>
              <a
                className="navbar-item"
                href="https://bulma.io/documentation/columns/basics/"
              >
                Columns
              </a>
              <a
                className="navbar-item"
                href="https://bulma.io/documentation/layout/container/"
              >
                Layout
              </a>
              <a
                className="navbar-item"
                href="https://bulma.io/documentation/form/general/"
              >
                Form
              </a>
              <hr className="navbar-divider" />
              <a
                className="navbar-item"
                href="https://bulma.io/documentation/elements/box/"
              >
                Elements
              </a>
              <a
                className="navbar-item is-active"
                href="https://bulma.io/documentation/components/breadcrumb/"
              >
                Components
              </a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <a
                  className="bd-tw-button button"
                  data-social-network="Twitter"
                  data-social-action="tweet"
                  data-social-target="http://localhost:4000"
                  target="_blank"
                  href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms"
                >
                  <span className="icon">
                    <i className="fab fa-twitter" />
                  </span>
                  <span>Tweet</span>
                </a>
              </p>
              <p className="control">
                <a
                  className="button is-primary"
                  href="https://github.com/jgthms/bulma/releases/download/0.7.1/bulma-0.7.1.zip"
                >
                  <span className="icon">
                    <i className="fas fa-download" />
                  </span>
                  <span>Download</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Nav;
