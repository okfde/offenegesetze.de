import React from 'react';
import Link from 'next/link';

const ListItem = ({ title, subtitle, id }) => (
  <li>
    <Link href={`/gesetz/${id}`}>
      <a>
        <div>{title}</div>
        <div>{subtitle}</div>
      </a>
    </Link>
  </li>
);

export default ListItem;
