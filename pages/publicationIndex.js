import React from 'react';

import { KIND_LIST } from '../config';

import BaseContent from '../components/base-content';

class PublicationIndex extends React.Component {
  state = { activeTab: 1, drop: true };

  render() {
    const { activeTab, drop } = this.state;

    return (
      <BaseContent>
        <h1 className="title">Alle Veröffentlichungen</h1>
        <p>Alle Veröffentlichen werden fortlaufend numeriert.</p>

        <div className="tabs">
          <ul>
            <li className={activeTab === 1 ? 'is-active' : ''}>
              <a onClick={() => this.setState({ activeTab: 1 })}>
                BGBl. Teil I
              </a>
            </li>
            <li className={activeTab === 2 ? 'is-active' : ''}>
              <a onClick={() => this.setState({ activeTab: 2 })}>
                BGBl. Teil II
              </a>
            </li>
          </ul>
        </div>

        <div>
          <table>
            {KIND_LIST[activeTab - 1].years
              .sort()
              .reverse()
              .map(year => (
                <div key={`${KIND_LIST[activeTab - 1].id}-${year}`}>
                  <tr>
                    <td>{year}</td>
                    {[...Array(5).keys()].map(x => (
                      <td>
                        <div
                          className={`dropdown ${
                            drop === `${year}-${x}` ? 'is-active' : ''
                          }`}
                        >
                          <div className="dropdown-trigger">
                            <button
                              className="button"
                              aria-haspopup="true"
                              aria-controls="dropdown-menu6"
                              type="button"
                              onClick={() =>
                                this.setState({
                                  drop:
                                    drop === `${year}-${x}`
                                      ? null
                                      : `${year}-${x}`,
                                })
                              }
                            >
                              <span>
                                {x}0-{x}9
                              </span>
                            </button>
                          </div>
                          <div
                            className="dropdown-menu"
                            id="dropdown-menu6"
                            role="menu"
                          >
                            <div className="dropdown-content">
                              <div className="dropdown-item">
                                <p>
                                  <a> {x} </a>
                                  <a> {x} </a>
                                  <a> {x} </a>
                                  <a> {x} </a>
                                  <a> {x} </a>
                                  <a> {x} </a>
                                  <a> {x} </a>
                                  <a> {x} </a>
                                  <a> {x} </a>
                                  <a> {x} </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    ))}
                  </tr>
                  {parseInt(year, 10) % 10 === 0 && (
                    <tr>
                      <br />
                      <br />
                    </tr>
                  )}
                </div>
              ))}
          </table>
        </div>
      </BaseContent>
    );
  }
}

export default PublicationIndex;
