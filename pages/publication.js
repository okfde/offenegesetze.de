import React from 'react';
import fetch from 'isomorphic-unfetch';
import dynamic from 'next/dynamic';
import dayjs from 'dayjs';

import BaseContent from '../components/base-content';
import PageNumber from '../components/page-number';

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
      page,
      document_url,
      entries,
    } = this.props;
    const { viewPdf } = this.state;

    const pubDate = dayjs(date);

    const titleDate = `am ${pubDate.format('DD.MM.YYYY')}`;
    const comp = [
      <div className="navbar-item">
        <a
          className={viewPdf ? 'button is-primary' : 'button'}
          onClick={() => this.setState({ viewPdf: !viewPdf })}
        >
          {viewPdf ? 'Text' : 'PDF'}
        </a>
      </div>,
      <div className="navbar-item">
        <a href={document_url} className="button" target="_blank">
          Download
        </a>
      </div>,
    ];

    return (
      <BaseContent navItems={comp}>
        <h1 className="title is-1">
          {titleDate}, Nr. {number}, {year}, {kind}
        </h1>
        <div>
          {entries.map((x, index) => {
            return (
              <div>
                <a key={x.order} href={x.anchor}>
                  {index + '. ' + x.title}
                </a>
              </div>
            );
          })}
        </div>
        <PDFViewer
          document_url={document_url}
          viewPdf={viewPdf}
          content={content}
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
    'https://api.offenegesetze.de/v1/amtsblatt/' + query.id
  );
  const json = await res.json();
  return { ...json };
};

export default Publication;
