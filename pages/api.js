import React from 'react';

import BaseContent from '../components/base-content';

const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

const CURRENT_YEAR = new Date().getFullYear();

const KINDS = [
  {
    name: 'BGBl Teil 1',
    size: '~6 GB',
    id: 'bgbl1',
    years: range(1949, CURRENT_YEAR + 1, 1),
  },
  {
    name: 'BGBl Teil 2',
    size: '',
    id: 'bgbl2',
    years: range(1951, CURRENT_YEAR + 1, 1),
  },
];

const Api = () => (
  <BaseContent>
    <h1 className="title">API und Bulk Downloads</h1>
    <h2 className="subtitle">API</h2>
    <p>
      Es steht eine API zur Verfügung unter:
      <code>
https://api.offenegesetze.de/v1/
      </code>
    </p>

    <h2 className="subtitle">Bulk Downloads</h2>
    <p>
      Wir stellen die bereinigten, druckbaren und kopierbaren PDFs des Bundesgesetzblatts Bulk Download für Teil 1 und 2 und die Jahre
    </p>

    <ul>
      {KINDS.map(kind => (
        <li key={`${kind.id}`}>
          <a href={`https://media.offenegesetze.de/${kind.id}.tar.bz2`}>
            Download {kind.name} komplett ({kind.size})
          </a>
          <ul
            style={{
              marginLeft: '1em',
              listStyleType: 'disc',
            }}
          >
            {kind.years.map(year => (
              <li key={`${kind.id}-${year}`}>
                <a
                  href={`https://media.offenegesetze.de/${
                    kind.id
                  }/${year}.tar.bz2`}
                >
                  Download Jahr {year}
                </a>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </BaseContent>
);

export default Api;
