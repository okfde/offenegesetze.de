import React from 'react';
import dayjs from 'dayjs';
import Link from 'next/link';

import { KINDS } from '../misc/config';

const PRODUCTION = process.env.NODE_ENV === 'production';

const ListItem = ({ item, q }) => {
  const {
    date,
    number,
    year,
    kind,
    title,
    url,
    pdf_page: pdfPage,
    content__highlight: results,
  } = item;
  let searchUrl = url;
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
  if (q && searchUrl.indexOf('#') !== -1) {
    const parts = searchUrl.split('#');
    searchUrl = `${parts[0]}?q=${q}#${parts[1]}`;
  }

  if (!PRODUCTION) {
    searchUrl = searchUrl.replace('https://offenegesetze.de/', '/');
  }

  return (
    <li className="box" key={number + year + kind}>
      <Link href={searchUrl}>
        <a href={searchUrl}>
          <h5>{title}</h5>
        </a>
      </Link>
      <p>
        <small className="has-text-grey">
          {titleDate}, Nr. {number} ({year}), {KINDS[kind].name}
        </small>
      </p>
      {results &&
        results.map((x, i) => (
          // there is no ohter way because it sometimes contains duplicates
          // eslint-disable-next-line react/no-array-index-key
          <div key={i}>
            <small
              className="content"
              dangerouslySetInnerHTML={{ __html: x }}
            />
          </div>
        ))}
    </li>
  );
};

export default ListItem;
