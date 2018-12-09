import { Document, Page, pdfjs } from 'react-pdf';
import React from 'react';
import LazyLoad from 'react-lazyload';
import { StickyContainer, Sticky } from 'react-sticky';

import PageNumber from './page-number';
import { renderLoader, PageLoading } from './page-loading';

class PDFViewer extends React.Component {
  state = {
    numPages: null,
  };

  componentDidMount() {
    pdfjs.GlobalWorkerOptions.workerSrc = '/static/pdf.worker.min.js';
  }

  _customTextRenderer = textItem => {
    let { q } = this.props;

    if (q) {
      q = q.replace(/[^\-\w ]/g, '');
    }

    return textItem.str
      .split(q)
      .reduce(
        (strArray, currentValue, currentIndex) =>
          currentIndex === 0
            ? [...strArray, currentValue]
            : [...strArray, <mark key={currentIndex}>{q}</mark>, currentValue],
        []
      );
  };

  render() {
    const { numPages } = this.state;
    const { documentUrl, viewPdf, contentList, toc, maxPages } = this.props;

    const onDocumentLoadSuccess = ({ numPages: num }) => {
      this.setState({ numPages: num });
    };

    const pageWidth = document.getElementById('pdfViewer').clientWidth;

    return (
      <div>
        {
          <div style={{ display: viewPdf ? 'block' : 'none' }}>
            <Document
              file={documentUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={renderLoader(maxPages)}
            >
              {[...Array(numPages || maxPages).keys()].map(x => (
                <StickyContainer key={x}>
                  <Sticky>
                    {({ style }) => (
                      <header
                        style={{
                          zIndex: '100',
                          ...style,
                        }}
                      >
                        <PageNumber
                          numPage={x + 1}
                          text={(() => {
                            const entry = toc.find(
                              t =>
                                x + 1 < t.pdfPage + t.numPages &&
                                x + 1 >= t.pdfPage
                            );
                            return entry != null && toc[0].pdfPage <= x + 1
                              ? entry.title
                              : '';
                          })()}
                        />
                      </header>
                    )}
                  </Sticky>
                  <div className="dina4">
                    <div className="dina4-ratio">
                      <div>
                        <LazyLoad
                          once
                          offset={[0, 0]}
                          resize
                          placeholder={<PageLoading page={x + 1} />}
                        >
                          <Page
                            width={pageWidth}
                            loading={<PageLoading page={x + 1} />}
                            pageNumber={x + 1}
                            customTextRenderer={this._customTextRenderer}
                          />
                        </LazyLoad>
                      </div>
                    </div>
                  </div>
                </StickyContainer>
              ))}
            </Document>
          </div>
        }
        <div style={{ display: viewPdf ? 'none' : 'block' }}>
          <div>
            {contentList.map((content, pageno) => (
              <div key={pageno}>
                <PageNumber numPage={pageno + 1} />
                {content}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

PDFViewer.defaultProps = {
  q: '',
};

export default PDFViewer;
