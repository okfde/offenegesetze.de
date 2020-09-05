import React from 'react';
import fetch from 'isomorphic-unfetch';
import dynamic from 'next/dynamic';
import dayjs from 'dayjs';

import Base from '../components/layout/base';
import PageNumber from '../components/publication/page-number';
import { renderLoader } from '../components/publication/page-loading';

import { KINDS } from '../misc/config';

const maxTocItems = 5;

class Publication extends React.Component {
  state = {
    viewPdf: true,
    truncateToc: true,
  };

  render() {
    const {
      kind,
      year,
      number,
      date,
      toc,
      documentUrl,
      page,
      q,
      contentList,
    } = this.props;
    const { viewPdf, truncateToc } = this.state;

    const pubDate = dayjs(date);

    const lastToc = toc[toc.length - 1];
    const maxPages = lastToc.pdfPage + lastToc.numPages;

    const PDFViewer = dynamic(import('../components/publication/pdf-viewer'), {
      ssr: false,
      loading: () => renderLoader(maxPages),
    });

    const titleDate = `Veröffentlicht am ${pubDate.format('DD.MM.YYYY')}`;
    const comp = [
      <div className="navbar-item" key="doc-switch">
        <a
          className={viewPdf ? 'button' : 'button'}
          onClick={() => this.setState({ viewPdf: !viewPdf })}
        >
          {viewPdf ? 'als Text' : 'als PDF'}
        </a>
      </div>,
      <div className="navbar-item" key="pdf-download">
        <a
          href={documentUrl}
          className="button is-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          PDF-Download
        </a>
      </div>,
    ];

    return (
      <Base
        navItems={comp}
        title={`${KINDS[kind].name}: Nr. ${number} (${year})`}
      >
        <div
          className="content columns is-tablet"
          style={{ padding: '1rem 0' }}
        >
          <div className="column is-12-mobile is-half-desktop is-offset-one-quarter-desktop is-three-fifths-tablet is-offset-one-fifth-tablet">
            <div className="section">
              <h1 className="title is-2">
                {KINDS[kind].name}: Nr. {number} ({year})
              </h1>
              <div>
                <p>
                  {titleDate},&nbsp;{' '}
                  <a
                    href={documentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="highlight"
                  >
                    PDF downloaden
                  </a>
                </p>
                <br />
                <p>
                  Eine Übersicht über alle Veröffentlichungen in diesem Blatt:
                </p>
                {toc
                  .filter((_, index) => !truncateToc || index < maxTocItems)
                  .map((x, index) => (
                    <div key={x.order}>
                      <div style={{ display: 'table-row' }}>
                        <div
                          style={{
                            display: 'table-cell',
                            paddingRight: '1rem',
                          }}
                        >
                          {`${index + 1}.`}
                        </div>
                        <div className="display: 'table-cell'">
                          <small>
                            <a key={x.order} href={`#page=${x.pdfPage}`}>
                              {`${x.title}`}
                            </a>{' '}
                            (Seite {x.pdfPage})
                          </small>
                        </div>
                        <br />
                      </div>
                      {truncateToc &&
                        toc.length > maxTocItems &&
                        index === maxTocItems - 1 && (
                          <div style={{ textAlign: 'center' }}>
                            <button
                              type="button"
                              className="button is-small"
                              onClick={() =>
                                this.setState({ truncateToc: false })
                              }
                            >
                              Zeige alle {toc.length} Einträge
                            </button>
                            <br />
                            <br />
                          </div>
                        )}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <noscript>
          <embed src={documentUrl} width="100%" height="2000px" />
          <div>
            {contentList.map((content, pageno) => (
              <div key={pageno}>
                <PageNumber numPage={pageno + 1} />
                {content}
              </div>
            ))}
          </div>
        </noscript>
        <div id="pdfViewer">
          <PDFViewer
            documentUrl={documentUrl}
            viewPdf={viewPdf}
            contentList={contentList}
            maxPages={maxPages}
            q={q}
            page={page}
            toc={toc}
          />
        </div>
      </Base>
    );
  }
}

Publication.getInitialProps = async ({ query }) => {
  const [kind, year, number] = query.id.split('-');

  const res = await fetch(
    `https://api.offenegesetze.de/v1/veroeffentlichung/?year=${year}
    &number=${number}&kind=${kind}`
  );
  const json = await res.json();
  const item = json.results[0];

  const contentList = [].concat(...json.results.map((x) => x.content));

  const toc = json.results.map(
    ({ title, order, pdf_page: pdfPage, num_pages: numPages }) => ({
      title,
      order,
      pdfPage,
      numPages,
    })
  );

  return {
    q: query.q,
    toc,
    page: query.page,
    kind,
    year,
    number,
    contentList,
    date: item.date,
    documentUrl: item.document_url,
  };
};

export default Publication;
