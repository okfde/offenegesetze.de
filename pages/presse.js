import React from 'react';
import Link from 'next/link';

import BaseContent from '../components/layout/base-content';

const Presse = () => (
  <BaseContent>
    <h1 className="title">Presse</h1>
    <p>
      OffeneGesetze.de ist ein ehrenamtliches, gemeinnütziges Projekt des Open Knowledge Foundation Deutschland e.V. 
  
      Wenden Sie sich bei Presseanfragen bitte an Arne Semsrott unter {' '}arne.semsrott@okfn.de oder +49 30 57703666 0. Richten Sie allgemeine Anfragen bitte an {' '}info@offenegesetze.de.
    </p>
  </BaseContent>
);

export default Presse;
