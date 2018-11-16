import React from 'react';
import Link from 'next/link';

const data = [
  {
    url: '/veroeffentlichung/bgbl1-1949-1-1/',
    title: 'Das Grundgesetz',
    imageSrc: '/static/index-preview/gg.png',
  },
  {
    url: '/veroeffentlichung/bgbl1-1974-63-1/#page=1',
    title: 'Teilweise Legalisierung der Abtreibung',
    imageSrc: '/static/index-preview/gg.png',
  },
  {
    url: '/veroeffentlichung/bgbl1-2017-52-9/#page=59',
    title: 'Ehe für alle',
    imageSrc: '/static/index-preview/gg.png',
  },
  {
    url: '/veroeffentlichung/bgbl1-2005-57-1/#page=2',
    title: 'Informationsfreiheitsgesetz',
    imageSrc: '/static/index-preview/gg.png',
  },
  {
    url: '/veroeffentlichung/bgbl1-1965-51-1/#page=1',
    title: 'Urheberrecht',
    imageSrc: '/static/index-preview/gg.png',
  },
  {
    url: '/veroeffentlichung/bgbl1-1998-6-5/#page=24)',
    title: 'Strafbarkeit von Vergewaltigung in der Ehe',
    imageSrc: '/static/index-preview/gg.png',
  },
  {
    url: '/veroeffentlichung/bgbl1-1972-74-1/#page=1',
    title: 'Das Tierschutzgesetz',
    imageSrc: '/static/index-preview/gg.png',
  },
  {
    url: '/veroeffentlichung/bgbl2-1990-35-1/#page=1',
    title: 'Wiedervereinigung',
    imageSrc: '/static/index-preview/gg.png',
  },
  {
    url: '/veroeffentlichung/bgbl1-1993-41-1/#page=1',
    title: 'Ayslkompromiss: Neufassung des Asylverfahrensgesetzes',
    imageSrc: '/static/index-preview/gg.png',
  },
  {
    url: '/veroeffentlichung/bgbl1-1969-52-1/#page=9',
    title: 'Paragraph 175: Teilweise Legalisierung von Homosexälität',
    imageSrc: '/static/index-preview/gg.png',
  },
];

const Substancials = () => (
  <div className="section">
    <div className="container content is-normal">
      <h3 className="is-size-3 has-text-center">Bedeutende Amtsblätter</h3>
      <div style={{ display: 'flex', margin: '-1rem', flexWrap: 'wrap' }}>
        {data.map(x => (
          <div
            style={{
              margin: '1em',
              height: 'auto',
              width: 'auto',
            }}
          >
            <Link prefetch href={x.url}>
              <a href={x.url}>
                <h4 className="is-size-4">{x.title}</h4>
                <figure className="image is-4by3">
                  <img style={{ width: '100%' }} src={x.imageSrc} />
                </figure>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Substancials;
