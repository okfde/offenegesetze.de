import React from 'react';
import fetch from 'isomorphic-unfetch';
import dynamic from 'next/dynamic';

import BaseContent from '../components/base-content';
const PDFViewer = dynamic(import('../components/pdf-viewer'), { ssr: false });

class Publication extends React.Component {
  render() {
    const {
      id,
      content,
      kind,
      year,
      number,
      date,
      page,
      document_url,
    } = this.props;

    return (
      <BaseContent>
        <div>
          {kind}, {year}, {number}, {date}, {page}
        </div>
        <PDFViewer document_url={document_url} />
        <div> {content} </div>
      </BaseContent>
    );
  }
}

Publication.getInitialProps = async ({ query }) => {
  const res = await fetch(
    'https://api.offenegesetze.de/v1/amtsblatt/' + query.id
  );
  const json = await res.json();
  return { ...json };
};

export default Publication;
