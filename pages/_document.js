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
          <meta name="viewport" content="width=device-width, initial-scale=1"  />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script type="text/javascript" dangerouslySetInnerHTML={ {__html: tracking} } />
        </body>
      </html>
    );
  }
}
