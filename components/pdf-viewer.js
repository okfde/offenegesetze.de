import { Document, Page, setOptions } from 'react-pdf';
import React from 'react';
import LazyLoad from 'react-lazyload';

import PageNumber from './page-number';

class PDFViewer extends React.Component {
  state = {
    numPages: null,
  };

  componentDidMount() {
    setOptions({
      workerSrc: '/static/pdf.worker.js',
    });
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  render() {
    const { numPages } = this.state;
    const { document_url, viewPdf, content } = this.props;

    return (
      <div>
        {viewPdf && (
          <Document
            file={document_url}
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            {[...Array(numPages).keys()].map(x => (
              <div key={x}>
                <PageNumber numPage={x} />
                <LazyLoad height={500} once>
                  <Page key={x} pageNumber={x + 1} />
                </LazyLoad>
              </div>
            ))}
          </Document>
        )}
        {!viewPdf &&
          [...Array(numPages).keys()].map(x => (
            <div key={x}>
              <PageNumber numPage={x} />
              {content[x]}
            </div>
          ))}
      </div>
    );
  }
}

export default PDFViewer;
