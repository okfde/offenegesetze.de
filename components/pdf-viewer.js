import { Document, Page, setOptions } from 'react-pdf';
import React from 'react';
import LazyLoad from 'react-lazyload';
import ReactLoading from 'react-loading';
import { StickyContainer, Sticky } from 'react-sticky';
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

    const { hash } = window.location;

    if (hash != null && this.state.jumped === false) {
      // wait until the HTML element is rendered
      const inter = setInterval(() => {
        const className = `.p${hash.split('=')[1]}`;
        // this can't select ids in the format #page=5, so go over class
        const elem = document.querySelector(className);
        if (elem != null) {
          clearInterval(inter);
          window.location.hash = '';
          window.location.hash = hash;
          this.setState({ jumped: true });
        }
      }, 1000);
    }
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  // renderLoad = height => <Loading height={height} />;

  render() {
    const { numPages, pageHeight } = this.state;
    const { document_url, viewPdf, content, q, toc } = this.props;

    const navbarHeight = document.getElementsByClassName('navbar')[0]
      .clientHeight;

    const pdfViewPageWidth = document.getElementById('pdfViewer').clientWidth;

    return (
      <div>
        {
          <div style={{ display: viewPdf ? 'block' : 'none' }} id="xx">
            <Document
              file={document_url}
              onLoadSuccess={this.onDocumentLoadSuccess}
              loading={<Loading height={pageHeight} />}
            >
              {[...Array(numPages).keys()].map(x => (
                <div key={x} id={'xx' + x}>
                  <StickyContainer>
                    <Sticky topOffset={-navbarHeight}>
                      {({ style }) => {
                        return (
                          <div
                            style={{
                              zIndex: '100',
                              ...style,
                              top: `${style.top + navbarHeight}px`,
                              // display: 'inline-block',
                            }}
                          >
                            <PageNumber
                              numPage={x}
                              text={(() => {
                                const xx = toc.find(t => t.pdfPage >= x + 1);
                                return xx != null && toc[0].pdfPage <= x + 1
                                  ? xx.title
                                  : '';
                              })()}
                            />
                          </div>
                        );
                      }}
                    </Sticky>
                    <LazyLoad
                      height={pageHeight}
                      once
                      offset={[200, 200]}
                      resize
                    >
                      <Page
                        width={pdfViewPageWidth}
                        key={x}
                        loading={<Loading height={pageHeight} />}
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
                  </StickyContainer>
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
