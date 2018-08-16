import React from 'react';
import dayjs from 'dayjs';

import ListItem from './list-item';

const Recent = ({ items }) => (
  <section className="section">
    <h2 className="subtitle">Letzte Veröffentlichungen</h2>
    <ul>
      {items.map(x => {
        let titleDate = '';
        const date = dayjs(x.date);
        const now = dayjs();
        const dateDiff = now.diff(date, 'days');
        console.log(dateDiff);
        if (dateDiff < 1) {
          titleDate = `vor ${now.diff(date, 'minutes')} Minuten`;
        } else if (dateDiff < 31) {
          titleDate = `vor ${now.diff(date, 'days')} Tagen`;
        } else {
          titleDate = `am ${date.format('DD.MM.YYYY')}`;
        }
        console.log(x);
        return (
          <div>
            <p>{titleDate}</p>
            {x.entries.map(en => <ListItem title={en.title} />)}
          </div>
        );
      })}
    </ul>
  </section>
);

export default Recent;
