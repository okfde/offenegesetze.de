import React from 'react';
import fetch from 'isomorphic-unfetch';
import { Document, Page, setOptions } from 'react-pdf';

import Base from '../components/base';

setOptions({
  workerSrc: '/static/pdf.worker.js',
});

class Law extends React.Component {
  state = {
    numPages: null,
    pageNumber: 1,
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

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
    const { pageNumber, numPages } = this.state;

    return (
      <Base>
        <div>
          {kind}, {year}, {number}, {date}, {page}
        </div>
        <div> {content} </div>
        <Document
          file={document_url}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          {[...Array(4).keys()].map(x => <Page key={x} pageNumber={x} />)}
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </Base>
    );
  }
}

Law.getInitialProps = async ({ query }) => {
  const res = await fetch(
    'https://api.offenegesetze.de/v1/amtsblatt/' + query.id
  );
  const json = await res.json();
  return { ...json };
};

export default Law;
