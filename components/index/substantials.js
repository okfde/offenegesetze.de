import React from 'react';
import Link from 'next/link';

const data = [
  {
    url: '/veroeffentlichung/bgbl1/1949/1',
    title: 'Das Grundgesetz (1949)',
    imageSrc: '/static/index-preview/gg.png',
    highlight: true,
  },
  {
    url: '/veroeffentlichung/bgbl1/1974/63#page=1',
    title: 'Teilweise Abschaffung der Strafbarkeit von Abtreibung (1974)',
    imageSrc: '/static/index-preview/abtreib.png',
  },
  {
    url: '/veroeffentlichung/bgbl1/2017/52#page=59',
    title: 'Ehe für alle (2017)',
    imageSrc: '/static/index-preview/gleigeschl.png',
    highlight: true,
  },
  {
    url: '/veroeffentlichung/bgbl1/2005/57#page=2',
    title: 'Informationsfreiheitsgesetz (2005)',
    imageSrc: '/static/index-preview/ifg.png',
  },
  {
    url: '/veroeffentlichung/bgbl1/1965/51#page=1',
    title: 'Urheberrechtsgesetz (1965)',
    imageSrc: '/static/index-preview/urhb.png',
    highlight: true,
  },
  {
    url: '/veroeffentlichung/bgbl1/1998/6#page=24',
    title: 'Abschaffung der Straffreiheit von Vergewaltigung in der Ehe (1998)',
    imageSrc: '/static/index-preview/abstrstrafehe.png',
  },
  {
    url: '/veroeffentlichung/bgbl1/1972/74#page=1',
    title: 'Tierschutzgesetz (1972)',
    imageSrc: '/static/index-preview/tier.png',
    highlight: true,
  },
  {
    url: '/veroeffentlichung/bgbl2/1990/35#page=1',
    title: 'Verträge zur Wiedervereinigung (1990)',
    imageSrc: '/static/index-preview/wiedervereinigung.png',
  },
  {
    url: '/veroeffentlichung/bgbl1/1993/41#page=1',
    title: 'Asylkompromiss: Neufassung des Asylverfahrensgesetzes (1993)',
    imageSrc: '/static/index-preview/asyl.png',
  },
  {
    url: '/veroeffentlichung/bgbl1/1969/52#page=9',
    title: 'Paragraph 175: Teilweise Legalisierung von Homosexualität (1969)',
    imageSrc: '/static/index-preview/strahomo.png',
  },
];

const Substantials = ({ highlight }) => (
  <div className="columns is-multiline">
    {data
      .filter(
        (x) =>
          (x.hasOwnProperty('highlight') && x.highlight === highlight) ||
          !highlight
      )
      .map((x) => (
        <div className="column" key={x.url}>
          <Link href={x.url}>
            <a href={x.url} className="card" style={{ minWidth: '10rem' }}>
              <div className="card-image">
                <figure className="image">
                  <img
                    style={{
                      width: '10rem',
                      height: '10rem',
                      objectFit: 'cover',
                    }}
                    src={x.imageSrc}
                    alt={x.title}
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="content">
                  <h6>{x.title}</h6>
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
  </div>
);

Substantials.defaultProps = {
  highlight: false,
};

export default Substantials;
