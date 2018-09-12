import React from 'react';
import dayjs from 'dayjs';

import ListItem from './list-item';

const ListItemPublication = ({ date, number, year, kind, entries, id, q }) => {
  let titleDate = '';
  const pubDate = dayjs(date);
  const now = dayjs();
  const dateDiff = now.diff(pubDate, 'days');
  if (dateDiff < 1) {
    titleDate = `vor ${now.diff(pubDate, 'hours')} Stunden`;
  } else if (dateDiff < 31) {
    titleDate = `vor ${now.diff(pubDate, 'days')} Tagen`;
  } else {
    titleDate = `am ${pubDate.format('DD.MM.YYYY')}`;
  }
  return (
    <div className="box" key={number + year + kind}>
      <p>
        {titleDate}, Nr. {number}, {year}, {kind}
      </p>
      <br />
      <ul>
        {entries.map(en => (
          <ListItem
            key={en.title}
            title={en.title}
            href={`/veroeffentlichung/${id}/` + (q ? `?q=${q}` : '')}
          />
        ))}
      </ul>
    </div>
  );
};

export default ListItemPublication;
