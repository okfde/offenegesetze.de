import React from 'react';
import fetch from 'isomorphic-unfetch';
import dynamic from 'next/dynamic';
import dayjs from 'dayjs';

import BaseContent from '../components/base-content';
import PageNumber from '../components/page-number';

import { dict } from '../config';

const PDFViewer = dynamic(import('../components/pdf-viewer'), { ssr: false });

class Publication extends React.Component {
  state = {
    viewPdf: true,
  };

  render() {
    const {
      id,
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
    const { viewPdf } = this.state;

    const pubDate = dayjs(date);

    const titleDate = `veröffentlicht am ${pubDate.format('DD.MM.YYYY')}`;
    const comp = [
      <div className="navbar-item">
        <a
          className={viewPdf ? 'button' : 'button'}
          onClick={() => this.setState({ viewPdf: !viewPdf })}
        >
          {viewPdf ? 'als Text' : 'als PDF'}
        </a>
      </div>,
      <div className="navbar-item">
        <a href={document_url} className="button is-primary" target="_blank">
          PDF-Download
        </a>
      </div>,
    ];

    return (
      <BaseContent navItems={comp}>
        <h1 className="title is-2">
          {dict[kind]}: Nr. {number} ({year})
        </h1>
        <h2 className="subtitle">
          {titleDate}
          <small>
            ,{' '}
            <a href={document_url} target="_blank">
              PDF downloaden.
            </a>
          </small>
        </h2>
        <div>
          Eine Übersicht über alle Veröffentlichungen in diesem Blatt:
          <br />
          {toc.map(x => (
            <div>
              <small>
                {/* <a key={x.order} href={`#${x.pdfPage}`}> */}
                <a
                  key={x.order}
                  onClick={() => {
                    document
                      .querySelector('#p' + x.pdfPage)
                      .scrollIntoView(true);
                  }}
                >
                  {`${x.order}. ${x.title}`}
                </a>
              </small>
            </div>
          ))}
        </div>
        <PDFViewer
          document_url={document_url}
          viewPdf={viewPdf}
          content={content}
          q={q}
          page={page}
        />
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
      </BaseContent>
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
