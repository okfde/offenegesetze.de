import React from 'react';
import fetch from 'isomorphic-unfetch';
import dynamic from 'next/dynamic';
import dayjs from 'dayjs';

import Base from '../components/base';
import PageNumber from '../components/page-number';

import { KINDS } from '../config';

const PDFViewer = dynamic(import('../components/pdf-viewer'), { ssr: false });

const maxTocItems = 5;

class Publication extends React.Component {
  state = {
    viewPdf: true,
    truncateToc: true,
  };

  render() {
    const {
      content,
      kind,
      year,
      number,
      date,
      toc,
      document_url,
      page,
      q,
    } = this.props;
    const { viewPdf, truncateToc } = this.state;

    const pubDate = dayjs(date);

    const titleDate = `veröffentlicht am ${pubDate.format('DD.MM.YYYY')}`;
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
          href={document_url}
          className="button is-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          PDF-Download
        </a>
      </div>,
    ];

    return (
      <Base navItems={comp}>
        <div className="columns" style={{ padding: '1rem 0' }}>
          <div className="column is-offset-1-mobile is-10-mobile is-half-desktop is-offset-one-quarter-desktop is-three-fifths-tablet is-offset-one-fifth-tablet">
            <h1 className="title is-2">
              {KINDS[kind].name}: Nr. {number} ({year})
            </h1>
            <h2 className="subtitle">
              {titleDate},&nbsp;
              <small>
                <a
                  href={document_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PDF downloaden.
                </a>
              </small>
            </h2>
            <div>
              <p>
                Eine Übersicht über alle Veröffentlichungen in diesem Blatt:
              </p>
              {toc
                .filter((_, index) => !truncateToc || index < maxTocItems)
                .map((x, index) => (
                  <div key={x.order}>
                    <div style={{ display: 'table-row' }}>
                      <div
                        style={{ display: 'table-cell', paddingRight: '1rem' }}
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
        <div id="pdfViewer">
          <PDFViewer
            document_url={document_url}
            viewPdf={viewPdf}
            content={content}
            q={q}
            page={page}
            toc={toc}
          />
        </div>
        <noscript>
          <div>
            {content.map((x, index) => (
              <div>
                <PageNumber numPage={index} />
                {x}
              </div>
            ))}
          </div>
        </noscript>
      </Base>
    );
  }
}

Publication.getInitialProps = async ({ query }) => {
  const res = await fetch(
    `https://api.offenegesetze.de/v1/veroeffentlichung/${query.id}/`
  );
  const json = await res.json();

  const res2 = await fetch(
    `https://api.offenegesetze.de/v1/veroeffentlichung/?year=${json.year}-${
      json.year
    }&number=${json.number}-${json.number}&kind=${json.kind}`
  );
  const json2 = await res2.json();

  const toc = json2.results.map(({ title, order, pdf_page: pdfPage }) => ({
    title,
    order,
    pdfPage,
  }));

  return { ...json, q: query.q, toc, page: query.page };
};

export default Publication;
