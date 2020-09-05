import React from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#00d1b2" />
        <meta name="msapplication-TileColor" content="#00d1b2" />
        <meta name="theme-color" content="#ffffff" />

        <meta
          name="description"
          content="Freier Zugang zu unseren Gesetzen. Wir stellen das Bundesgesetzblatt in digitaler Form kostenfrei zur Verfügung."
        />
        <meta
          property="og:image"
          content="https://offenegesetze.de/static/preview.jpg"
        />
        <meta property="og:url" content="https://offenegesetze.de" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="OffeneGesetze.de" />
        <meta
          property="article:author"
          content="https://www.facebook.com/offenegesetze"
        />
        <meta
          property="og:title"
          content={pageProps.title || 'OffeneGesetze.de'}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@offenegesetze" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
