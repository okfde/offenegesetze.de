import React from 'react';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import SearchBox from '../components/search-box';

const Nav = ({ isRoot }) => (
  <nav className="navbar is-fixed-top is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
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
          <a className="navbar-item" href="/">
            OffeneGesetze.de
          </a>
          {!isRoot && (
            <div className="navbar-item">
              <SearchBox />
            </div>
          )}
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
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <style jsx>{`
      .navbar.is-transparent,
      .navbar .button,
      .navbar input {
        background-color: transparent;
        background-image: none;
      }
    `}</style> */}
  </nav>
);
export default Nav;
