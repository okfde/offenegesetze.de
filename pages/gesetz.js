import React from 'react';
import fetch from 'isomorphic-unfetch';

import Base from '../components/base';

const Law = ({ id, title, first_message, messages }) => (
  <Base>
    <div> {title} </div>
    <div> {first_message} </div>
    <div> {messages[0].content} </div>
  </Base>
);

Law.getInitialProps = async ({ query }) => {
  const res = await fetch('https://fragdenstaat.de/api/v1/request/' + query.id);
  const json = await res.json();
  return { ...json };
};

export default Law;
