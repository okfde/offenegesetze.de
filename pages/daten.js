import React from 'react';

import { KIND_LIST } from '../misc/config';

import BaseContent from '../components/layout/base-content';

const Api = () => (
  <BaseContent title="Download & API">
    <h1 className="title">Download und API</h1>

    <p>
      Zur weiteren Verwendung der Daten bieten wir eine{' '}
      <a
        className="highlight"
        href="https://de.wikipedia.org/wiki/Programmierschnittstelle"
      >
        API
      </a>{' '}
      an: <br />
      <br />
      <a href="https://api.offenegesetze.de/v1/">
        <code>https://api.offenegesetze.de/v1/</code>
      </a>
    </p>

    <h2 className="subtitle">Downloads</h2>
    <p>
      Neben der API stellen wir die bereinigten, druckbaren und kopierbaren PDFs
      auch als Download zur Verfügung. Dafür bündelt wir sie für BGBl.
      Teil&nbsp;I&nbsp;&amp;&nbsp;II komplett und jeweils pro einzelnes Jahr.
      Zum Entpacken der .tar.bz2-Archive brauchen sie ggfs. ein Extra-Programm.
      Für Windows empfiehlt sich{' '}
      <a className="highlight" href="https://www.7-zip.org/">
        7-Zip
      </a>
      :
    </p>
    <ul>
      {KIND_LIST.map(kind => (
        <div>
          <br />
          <h3 className="is-3">{kind.name}</h3>
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
              {kind.years
                .sort((x, y) => y - x)
                .map(year => (
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
        </div>
      ))}
    </ul>
  </BaseContent>
);

export default Api;
