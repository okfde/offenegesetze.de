import { Document, Page, setOptions } from 'react-pdf';
import React from 'react';
import LazyLoad from 'react-lazyload';
import ReactLoading from 'react-loading';

import PageNumber from './page-number';

// NB: height.height
const Loading = height => (
  <div style={{ height: `${height.height}px` }}>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <ReactLoading type="spin" color="#0069d0" height="20%" width="20%" />
    </div>
  </div>
);

class PDFViewer extends React.Component {
  state = {
    numPages: null,
    pageHeight: 500,
    jumped: false,
  };

  componentDidMount() {
    setOptions({
      workerSrc: '/static/pdf.worker.js',
    });

    if (this.props.page != null && this.state.jumped === false) {
      // wait until the ID is avaiable
      const inter = setInterval(() => {
        const hash = `#p${this.props.page}`;
        const elem = document.querySelector(hash);
        if (elem != null) {
          clearInterval(inter);
          elem.scrollIntoView(true);
          this.setState({ jumped: true });
        }
      }, 1000);
    }
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  renderLoad = height => <Loading height={height} />;

  render() {
    const { numPages, pageHeight } = this.state;
    const { document_url, viewPdf, content, q } = this.props;
    return (
      <div>
        {
          <div style={{ display: viewPdf ? 'block' : 'none' }}>
            <Document
              file={document_url}
              onLoadSuccess={this.onDocumentLoadSuccess}
              loading={<Loading height={pageHeight} />}
            >
              {[...Array(numPages).keys()].map(x => (
                <div key={x}>
                  <PageNumber numPage={x} />
                  <LazyLoad height={pageHeight} once offset={[500, 500]} resize>
                    <Page
                      key={x}
                      loading={this.renderLoad(pageHeight)}
                      pageNumber={x + 1}
                      inputRef={ref => {
                        this.myPage = ref;
                      }}
                      onRenderSuccess={() => {
                        if (pageHeight < this.myPage.clientHeight) {
                          this.setState({
                            pageHeight: this.myPage.clientHeight,
                          });
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
          </div>
        }
        <div style={{ display: viewPdf ? 'none' : 'block' }}>
          {[...Array(numPages).keys()].map(x => (
            <div key={x}>
              <PageNumber numPage={x} />
              <div style={{ minHeight: pageHeight, lineHeight: 1.1 }}>
                <small>{content[x]}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default PDFViewer;
