import React from 'react';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import AnimateOnChange from 'react-animate-on-change';

import { CURRENT_YEAR } from '../misc/config';
import BaseContent from '../components/layout/base-content';
import Substantials from '../components/index/substantials';

class PublicationIndex extends React.Component {
  state = { bgbl: 'bgbl1', year: CURRENT_YEAR };

  render() {
    const { bgbl, year } = this.state;
    const { items } = this.props;

    return (
      <BaseContent title="Veröffentlichungen">
        <h1 className="title">Veröffentlichungen</h1>
        <h2 className="is-2">Das Bundesgesetzblatt</h2>
        <p>
          Im Bundesgesetzblatt (BGBl.) werden alle Gesetze der Bundesrepublik
          Deutschland veröffentlicht. Es besteht aus zwei Teilen. In Teil I
          werden Rechtsvorschriften wie Gesetze und Verordnungen veröffentlicht.
          Teil II enthält völkerrechtliche und andere internationale Abkommen.
          Neue Ausgaben des Gesetzblatts erscheinen durchschnittlich ein bis
          zweimal wöchentlich und werden pro Jahr fortlaufend nummeriert. Jede
          Ausgabe enthält mehrere Veröffentlichungen.
        </p>
        <br />
        <div>
          <h2>Art</h2>
          <span
            style={{ margin: '.5rem', fontWeight: 'bold' }}
            className={
              bgbl === 'bgbl1' ? 'button is-primary is-selected' : 'button'
            }
            onClick={() => this.setState({ bgbl: 'bgbl1' })}
          >
            BGBl. Teil I
          </span>
          <span
            style={{ margin: '.5rem', fontWeight: 'bold' }}
            onClick={() => this.setState({ bgbl: 'bgbl2' })}
            className={
              bgbl === 'bgbl2' ? 'button is-primary is-selected' : 'button'
            }
          >
            BGBl. Teil II
          </span>
        </div>
        <br />

        <div>
          <h2>Jahr</h2>

          {items
            .filter((x) => x.kind === bgbl)
            .sort((x, y) => x.year - y.year)
            .reverse()
            .map((x) => (
              <button
                key={x.year}
                onClick={() => this.setState({ year: x.year })}
                className={
                  year === x.year ? 'button is-primary is-selected' : 'button'
                }
                style={{ width: '4rem', margin: '.5rem' }}
              >
                {x.year}
              </button>
            ))}
        </div>
        <br />

        <div>
          <h2>Nummer</h2>
          <AnimateOnChange
            baseClassName="year"
            animationClassName="year-bounce"
            animate={year}
          >
            {items.length &&
              [
                ...Array(
                  items.filter((x) => x.kind === bgbl && x.year === year)[0]
                    .max_number
                ).keys(),
              ].map((x) => (
                <Link
                  href={`/veroeffentlichung/${bgbl}/${year}/${x + 1}`}
                  key={x}
                >
                  <a
                    href={`/veroeffentlichung/${bgbl}/${year}/${x + 1}`}
                    className="button"
                    style={{ width: '4rem', margin: '.5rem' }}
                  >
                    {x + 1}
                  </a>
                </Link>
              ))}
          </AnimateOnChange>
        </div>
        <h2 id="bedeutende" name="bedeutende">
          Bedeutende Gesetze
        </h2>
        <br />
        <Substantials />
      </BaseContent>
    );
  }
}

PublicationIndex.getInitialProps = async () => {
  const res = await fetch(
    'https://api.offenegesetze.de/v1/veroeffentlichung/overview/'
  );
  const items = await res.json();

  // hotfix cause years are missing in backend
  if (!items.some((x) => x.year === CURRENT_YEAR && x.kind === 'bgbl1')) {
    items.push({ year: CURRENT_YEAR, kind: 'bgbl1', max_number: 0 });
  }

  if (!items.some((x) => x.year === CURRENT_YEAR && x.kind === 'bgbl2')) {
    items.push({ year: CURRENT_YEAR, kind: 'bgbl2', max_number: 0 });
  }

  return {
    items,
  };
};

PublicationIndex.defaultProps = {
  items: [],
};

export default PublicationIndex;
