import { Document, Page, setOptions } from 'react-pdf';
import LazyLoad from 'react-lazyload';
import ScrollableAnchor from 'react-scrollable-anchor';

import React from 'react';

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
              <div>
                <ScrollableAnchor id={x + 1}>
                  <h2
                    className="title is-2 has-text-centered"
                    style={{ paddingBottom: '1rem', paddingTop: '5rem' }}
                  >
                    {x + 1}
                  </h2>
                </ScrollableAnchor>
                <LazyLoad height={500} once>
                  <Page key={x} pageNumber={x + 1} />
                </LazyLoad>
              </div>
            ))}
          </Document>
        )}
        {!viewPdf &&
          [...Array(numPages).keys()].map(x => (
            <div>
              <ScrollableAnchor id={x + 1}>
                <h2
                  className="title is-2 has-text-centered"
                  style={{ paddingBottom: '1rem', paddingTop: '5rem' }}
                >
                  {x + 1}
                </h2>
              </ScrollableAnchor>

              {content[x]}
            </div>
          ))}
      </div>
    );
  }
}

export default PDFViewer;
