import React from 'react';

import { KIND_LIST } from '../misc/config';

import BaseContent from '../components/layout/base-content';

const Api = () => (
  <BaseContent title="API und Bulk Downloads">
    <h1 className="title">Daten zum Download und per API</h1>
    <h2 className="subtitle">API</h2>
    <p>Es steht eine API zur Verfügung unter:</p>
    <p>
      <code>https://api.offenegesetze.de/v1/</code>
    </p>

    <h2 className="subtitle">Bulk Downloads</h2>
    <p>
      Wir stellen die bereinigten, druckbaren und kopierbaren PDFs des
      Bundesgesetzblatts als Bulk Download für Teil&nbsp;I&nbsp;&amp;&nbsp;II
      und für die einzelnen Jahre zur Verfügung:
    </p>

    <ul>
      {KIND_LIST.map(kind => (
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
            {kind.years.reverse().map(year => (
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
