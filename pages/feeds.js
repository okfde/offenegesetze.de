import React from 'react';

import BaseContent from '../components/base-content';

const Feeds = () => (
  <BaseContent>
    <h1 className="title">Feeds</h1>
    <p>
      Um auf dem Neusten stand zu bleiben, kannst du unsere{' '}
      <a href="https://de.wikipedia.org/wiki/RSS_(Web-Feed)">RSS-Feeds</a>{' '}
      abbonieren.
      <ul>
        <li>Feed 1</li>
        <li>Feed 2</li>
        <li>Feed 3</li>
      </ul>
    </p>
  </BaseContent>
);

export default Feeds;
