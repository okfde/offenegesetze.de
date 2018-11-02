import React from 'react';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import SearchBox from '../components/search-box';

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
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <span style={{ marginRight: '0.5rem' }}>⚖️</span>{' '}
              <b>OffeneGesetze.de</b>
            </a>
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
                  <SearchBox />
                </div>
              )}
              {navItems}
            </div>

            <div className="navbar-end">
              <a className="navbar-item" href="/suche">
                Veröffentlichungen
              </a>
              <a className="navbar-item" href="/forderungen">
                Über
              </a>
              <a className="navbar-item is-hidden-desktop	" href="/kontakt">
                Kontakt
              </a>
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
