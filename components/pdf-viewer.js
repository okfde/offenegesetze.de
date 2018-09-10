import { Document, Page, setOptions } from 'react-pdf';
import React from 'react';
import LazyLoad from 'react-lazyload';

import PageNumber from './page-number';

class PDFViewer extends React.Component {
  state = {
    numPages: null,
    pageHeight: 500,
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
    const { numPages, pageHeight } = this.state;
    const { document_url, viewPdf, content, q } = this.props;
    console.log(q);
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
                <LazyLoad height={pageHeight} once>
                  <Page
                    key={x}
                    pageNumber={x + 1}
                    inputRef={ref => {
                      this.myPage = ref;
                    }}
                    onRenderSuccess={() => {
                      if (pageHeight !== this.myPage.clientHeight) {
                        this.setState({ pageHeight: this.myPage.clientHeight });
                      }
                    }}
                    customTextRenderer={textItem =>
                      textItem.str
                        .split(q)
                        .reduce(
                          (strArray, currentValue, currentIndex) =>
                            currentIndex === 0
                              ? [...strArray, currentValue]
                              : [
                                  ...strArray,
                                  <mark key={currentIndex}>{q}</mark>,
                                  currentValue,
                                ],
                          []
                        )
                    }
                  />
                </LazyLoad>
              </div>
            ))}
          </Document>
        )}
        {!viewPdf &&
          [...Array(numPages).keys()].map(x => (
            <div key={x}>
              <PageNumber numPage={x} />
              <div style={{ minHeight: pageHeight, lineHeight: 1.1 }}>
                <small>{content[x]}</small>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

export default PDFViewer;
