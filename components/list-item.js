import React from 'react';
import dayjs from 'dayjs';
import Link from 'next/link';

import { KINDS } from '../config';

const ListItem = ({
  date,
  number,
  year,
  kind,
  title,
  id,
  q,
  pdf_page: pdfPage,
  content__highlight: results,
}) => {
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
      <Link
        href={`/veroeffentlichung/${id}/${q ? `?q=${q}` : ''}#page=${pdfPage}`}
      >
        <a>
          <div>{title}</div>
        </a>
      </Link>
      <p>
        <small className="has-text-grey">
          {titleDate}, Nr. {number} ({year}), {KINDS[kind].name}
        </small>
      </p>
      {results &&
        results.map(x => (
          <div key={x}>
            <small
              className="content"
              dangerouslySetInnerHTML={{ __html: x }}
            />
          </div>
        ))}
    </div>
  );
};

export default ListItem;
