import React from 'react';
import fetch from 'isomorphic-unfetch';

import { CURRENT_YEAR } from '../misc/config';

import BaseContent from '../components/layout/base-content';
import { Z_ASCII } from 'zlib';

import AnimateOnChange from 'react-animate-on-change';

class PublicationIndex extends React.Component {
  state = { bgbl: 'bgbl1', year: CURRENT_YEAR };

  render() {
    const { bgbl, year } = this.state;
    const { items } = this.props;

    return (
      <BaseContent>
        <h1 className="title">Alle Veröffentlichungen</h1>
        <p>Alle Veröffentlichen werden fortlaufend numeriert.</p>

        <p>
          <h2>1. Art</h2>
          {/* <div className="buttons has-addons"> */}
          <span
            style={{ margin: '.5rem' }}
            className={
              bgbl === 'bgbl1' ? 'button is-info is-selected' : 'button'
            }
            onClick={() => this.setState({ bgbl: 'bgbl1' })}
          >
            BGBl. Teil I
          </span>
          <span
            style={{ margin: '.5rem' }}
            onClick={() => this.setState({ bgbl: 'bgbl2' })}
            className={
              bgbl === 'bgbl2' ? 'button is-info is-selected' : 'button'
            }
          >
            BGBl. Teil II
          </span>
          {/* </div> */}
        </p>

        <p>
          <h2>2. Jahr</h2>

          {items
            .filter(x => x.kind === bgbl)
            .sort((x, y) => x.year < y.year)
            .map(x => (
              <button
                onClick={() => this.setState({ year: x.year })}
                className={
                  year === x.year ? 'button is-info is-selected' : 'button'
                }
                style={{ width: '4rem', margin: '.5rem' }}
              >
                {x.year}
              </button>
            ))}
        </p>

        <p>
          <h2>3. Nummer</h2>
          <AnimateOnChange
            baseClassName="year"
            animationClassName="year-bounce"
            animate={year}
          >
            {[
              ...Array(
                items.filter(x => x.kind === bgbl && x.year === year)[0]
                  .max_number
              ).keys(),
            ].map(x => (
              <a
                href={x + 1}
                className="button"
                style={{ width: '4rem', margin: '.5rem' }}
              >
                {x + 1}
              </a>
            ))}
          </AnimateOnChange>
        </p>
      </BaseContent>
    );
  }
}

PublicationIndex.getInitialProps = async () => {
  const res = await fetch(
    'https://api.offenegesetze.de/v1/veroeffentlichung/overview/'
  );
  const items = await res.json();

  return {
    items,
  };
};

export default PublicationIndex;
