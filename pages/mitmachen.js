import React from 'react';
import Link from 'next/link';

import BaseContent from '../components/base-content';

const Mitmachen = () => (
  <BaseContent>
    <h1 className="title">Mitmachen</h1>
    <p>
      Diese Webseite wurde ehrematlich entwickelt und wir freuen uns immer über
      Mitstreitende. Direkt an der technischen Entwicklung kann man auf{' '}
      <a className="highlight" href="https://github.com/topics/offene-gesetze">
        Github
      </a>{' '}
      einsteigen.
    </p>
    <p>
      Wir feuen uns auch über Mitarbeit am Design, Texten und
      Öffentlichkeitsarbeit. Bitte nehmt hierfür{' '}
      <Link prefetch href="/kontakt">
        <a className="highlight">Kontakt</a>
      </Link>{' '}
      mit uns auf.
    </p>
  </BaseContent>
);

export default Mitmachen;
