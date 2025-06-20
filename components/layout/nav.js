import Link from 'next/link';
import React from 'react';

import SearchBox from '../search/search-box';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  render() {
    const { isActive } = this.state;
    const { hideSearch, navItems } = this.props;
    return (
      <nav className="navbar is-fixed-top" style={{ zIndex: '1000' }}>
        <div className="container">
          <strong className="text-center">
            OffeneGesetze.de ist seit 1.1.2023 nicht mehr aktuell. Bitte nutzen Sie die neue <a href="https://www.recht.bund.de/">Verkündungsplattform des Bundes.</a>
          </strong>
        </div>
        <div className="container">
          <div className="navbar-brand">
            <Link href="/">
              <a className="navbar-item" href="/">
                <img
                  src="/static/logo_small.jpg"
                  width="28"
                  height="28"
                  style={{ marginRight: '0.5rem' }}
                  alt="Waage als Logo"
                />
                <b>OffeneGesetze.de</b>
              </a>
            </Link>
            <div
              className={
                isActive
                  ? 'navbar-burger burger is-active'
                  : 'navbar-burger burger'
              }
              data-target="navbarExampleTransparentExample"
              onClick={() => this.setState({ isActive: !this.state.isActive })}
            >
              <span />
              <span />
              <span />
            </div>
          </div>

          <div
            id="navbarExampleTransparentExample"
            className={isActive ? 'navbar-menu is-active' : 'navbar-menu'}
          >
            <div
              className="navbar-start"
              style={{ flexGrow: 1, flexShrink: 1 }}
            >
              {!hideSearch && (
                <div className="navbar-item is-expanded">
                  <form action="/suche" style={{ width: '100%' }}>
                    <SearchBox />
                  </form>
                </div>
              )}
              {navItems}
            </div>

            <div className="navbar-end">
              <Link href="/veroeffentlichung">
                <a className="navbar-item" href="/veroeffentlichung">
                  Veröffentlichungen
                </a>
              </Link>
              <Link href="/faq">
                <a className="navbar-item is-hidden-tablet	" href="/faq">
                  FAQ
                </a>
              </Link>
              <a className="navbar-item" href="https://okfn.de/impressum/">
                Impressum
              </a>
              <a className="navbar-item is-hidden-tablet	" href="https://okfn.de/impressum/#datenschutzerkl%C3%A4rung">
                Datenschutz
              </a>
              <Link href="/daten">
                <a className="navbar-item is-hidden-tablet	" href="/daten">
                  Download & API
                </a>
              </Link>
              <Link href="/feeds">
                <a className="navbar-item is-hidden-tablet	" href="/feeds">
                  RSS-Feeds
                </a>
              </Link>
              <Link href="/presse">
                <a className="navbar-item is-hidden-tablet	" href="/presse">
                  Presse
                </a>
              </Link>
            </div>
          </div>
        </div>
        <style jsx>{`
          // .navbar.is-transparent,
          // .navbar .button,
          // .navbar input {
          //   background-color: transparent;
          //   background-image: none;
          // }

          .navbar a {
            color: inherit;
          }
        `}</style>
      </nav>
    );
  }
}

export default Nav;
