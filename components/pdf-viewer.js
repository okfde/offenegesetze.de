import { Document, Page, setOptions } from 'react-pdf';
import LazyLoad from 'react-lazyload';

import React from 'react';

class PDFViewer extends React.Component {
  state = {
    numPages: null,
    pageNumber: 1,
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
    const { document_url } = this.props;

    return (
      <div>
        <Document
          file={document_url}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          {[...Array(numPages).keys()].map(x => (
            <LazyLoad height={500} once>
              <Page key={x} pageNumber={x + 1} />
            </LazyLoad>
          ))}
        </Document>
      </div>
    );
  }
}

export default PDFViewer;
