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

  _customTextRenderer = (textItem) => {
    let { q } = this.props;

    if (q) {
      q = q.replace(/[^\-\w ]/g, '');
    }

    return textItem.str
      .split(q)
      .reduce(
        (strArray, currentValue, currentIndex) =>
          currentIndex === 0
            ? [...strArray]
            : [...strArray, <mark key={currentIndex}>{q}</mark>, currentValue],
        []
      );
  };

  _text = (x) => {
    const { toc } = this.props;
    const entry = toc.find(
      (t) => x + 1 < t.pdfPage + t.numPages && x + 1 >= t.pdfPage
    );
    return entry != null && toc[0].pdfPage <= x + 1 ? entry.title : '';
  };

  render() {
    const { numPages } = this.state;
    const { documentUrl, viewPdf, contentList, q, maxPages } = this.props;

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
              {[...Array(numPages || maxPages).keys()].map((x) => (
                <StickyContainer key={x}>
                  <Sticky>
                    {({ style }) => (
                      <header
                        style={{
                          zIndex: '100',
                          ...style,
                        }}
                      >
                        <PageNumber numPage={x + 1} text={this._text(x)} />
                      </header>
                    )}
                  </Sticky>
                  <div className="dina4">
                    <div className="dina4-ratio">
                      <div>
                        <LazyLoad
                          once
                          offset={pageWidth > 600 ? [500, 500] : [100, 100]}
                          resize
                          placeholder={<PageLoading page={x + 1} />}
                        >
                          {q != null && q !== '' ? (
                            <Page
                              width={pageWidth}
                              loading={<PageLoading page={x + 1} />}
                              pageNumber={x + 1}
                              renderAnnotationLayer={false}
                              customTextRenderer={this._customTextRenderer}
                            />
                          ) : (
                            <Page
                              width={pageWidth}
                              loading={<PageLoading page={x + 1} />}
                              pageNumber={x + 1}
                              renderTextLayer={false}
                              renderAnnotationLayer={false}
                            />
                          )}
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
                <pre>{content}</pre>
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
