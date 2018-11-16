// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    const tracking = `var _paq = _paq || [];
    /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);
    (function() {
      var u="//traffic.okfn.de/";
      _paq.push(['setTrackerUrl', u+'piwik.php']);
      _paq.push(['setSiteId', '46']);
      var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
      g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
    })();`;
    return (
      <html className="has-navbar-fixed-top">
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
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{ __html: tracking }}
          />
        </body>
      </html>
    );
  }
}
