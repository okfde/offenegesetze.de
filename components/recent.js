import React from 'react';
import dayjs from 'dayjs';

import ListItem from './list-item';

const Recent = ({ items }) => (
  <div style={{ paddingBottom: '2rem' }}>
    <br />
    <h2 className="subtitle">Letzte Veröffentlichungen</h2>
    <ul>
      {items.map(x => {
        let titleDate = '';
        const date = dayjs(x.date);
        const now = dayjs();
        const dateDiff = now.diff(date, 'days');
        if (dateDiff < 1) {
          titleDate = `vor ${now.diff(date, 'hours')} Stunden`;
        } else if (dateDiff < 31) {
          titleDate = `vor ${now.diff(date, 'days')} Tagen`;
        } else {
          titleDate = `am ${date.format('DD.MM.YYYY')}`;
        }
        return (
          <div className="box" key={x.number + x.year + x.kind}>
            <p>
              {titleDate}, Nr. {x.number}, {x.year}, {x.kind}
            </p>
            <br />
            {x.entries.map(en => <ListItem key={en.title} title={en.title} />)}
          </div>
        );
      })}
    </ul>
  </div>
);

export default Recent;
