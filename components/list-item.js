import React from 'react';
import Link from 'next/link';

const ListItem = ({ title, subtitle, href, key }) => (
  <li key={key}>
    <Link href={href}>
      <a>
        <div>{title}</div>
        <div>{subtitle}</div>
      </a>
    </Link>
  </li>
);

export default ListItem;
