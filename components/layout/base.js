import Head from 'next/head';
import ScrollToTop from 'react-scroll-up';

import Footer from './footer';
import Nav from './nav';

const Base = ({ title, navItems, children, hideSearch, hideFooter }) => (
  <div>
    <Head>
      <title>
        {title && `${title} - `}OffeneGesetze.de – Freier Zugang zu unseren
        Gesetzen
      </title>
    </Head>

    <Nav hideSearch={hideSearch} navItems={navItems} />
    <main style={{ minHeight: '50vh' }} className="container">
      {children}
    </main>

    {!hideFooter && <Footer />}

    <ScrollToTop
      showUnder={160}
      duration={1000}
      style={{
        bottom: 30,
        right: 10,
      }}
    >
      <span className="icon is-large">
        <i className="fas fa-arrow-circle-up fa-2x" />
      </span>
    </ScrollToTop>
  </div>
);

export default Base;
