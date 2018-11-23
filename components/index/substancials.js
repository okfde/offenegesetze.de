import React from 'react';
import Link from 'next/link';

const data = [
  {
    url: '/veroeffentlichung/bgbl1/1949/1/',
    title: 'Das Grundgesetz',
    imageSrc: '/static/index-preview/gg.png',
    highlight: true,
  },
  {
    url: '/veroeffentlichung/bgbl1/1974/63/#page=1',
    title: 'Teilweise Legalisierung der Abtreibung',
    imageSrc: '/static/index-preview/gg.png',
  },
  {
    url: '/veroeffentlichung/bgbl1/2017/52/#page=59',
    title: 'Ehe für alle',
    imageSrc: '/static/index-preview/gg.png',
    highlight: true,
  },
  {
    url: '/veroeffentlichung/bgbl1/2005/57/#page=2',
    title: 'Informationsfreiheitsgesetz',
    imageSrc: '/static/index-preview/gg.png',
  },
  {
    url: '/veroeffentlichung/bgbl1/1965/51/#page=1',
    title: 'Urheberrecht',
    imageSrc: '/static/index-preview/gg.png',
    highlight: true,
  },
  {
    url: '/veroeffentlichung/bgbl1/1998/6/#page=24)',
    title: 'Strafbarkeit von Vergewaltigung in der Ehe',
    imageSrc: '/static/index-preview/gg.png',
  },
  {
    url: '/veroeffentlichung/bgbl1/1972/74/#page=1',
    title: 'Das Tierschutzgesetz',
    imageSrc: '/static/index-preview/gg.png',
    highlight: true,
  },
  {
    url: '/veroeffentlichung/bgbl2/1990/35/#page=1',
    title: 'Wiedervereinigung',
    imageSrc: '/static/index-preview/gg.png',
  },
  {
    url: '/veroeffentlichung/bgbl1/1993/41/#page=1',
    title: 'Ayslkompromiss: Neufassung des Asylverfahrensgesetzes',
    imageSrc: '/static/index-preview/gg.png',
  },
  {
    url: '/veroeffentlichung/bgbl1/1969/52/#page=9',
    title: 'Paragraph 175: Teilweise Legalisierung von Homosexälität',
    imageSrc: '/static/index-preview/gg.png',
  },
];

const Substancials = ({ highlight }) => (
  <div>
    {data
      .filter(
        x =>
          (x.hasOwnProperty('highlight') && x.highlight === highlight) ||
          !highlight
      )
      .map(x => (
        <div
          style={{
            display: 'inline-block',
            margin: '1em',
            height: 'auto',
            width: '15rem',
          }}
        >
          <Link prefetch href={x.url}>
            <a href={x.url}>
              <h4 className="is-size-4">{x.title}</h4>
              <figure className="image is-4by3">
                <img
                  style={{ width: '10rem', height: '10rem' }}
                  src={x.imageSrc}
                />
              </figure>
            </a>
          </Link>
        </div>
      ))}
  </div>
);

Substancials.defaultProps = {
  highlight: false,
};

export default Substancials;
