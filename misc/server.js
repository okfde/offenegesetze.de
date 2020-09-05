const express = require('express');
const next = require('next');
const LRUCache = require('lru-cache');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// This is where we cache our rendered HTML pages
const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60, // 1 hour
});

const cacheSites = [
  '/',
  '/daten',
  '/datenschutz',
  '/feeds',
  '/kontakt',
  '/uber',
  '/presse',
  '/veroeffentlichung',
];

app.prepare().then(() => {
  const server = express();

  server.use(express.static('static/favicons'));

  cacheSites.forEach((x) =>
    server.get(x, (req, res) => {
      renderAndCache(req, res, x);
    })
  );

  server.get('/veroeffentlichung/:kind', (req, res) => {
    res.redirect(`/suche?kind=${encodeURIComponent(req.params.kind)}`);
  });

  server.get('/veroeffentlichung/:kind/:year', (req, res) => {
    res.redirect(
      `/suche?kind=${encodeURIComponent(
        req.params.kind
      )}&year=${encodeURIComponent(req.params.year)}`
    );
  });

  server.get('/veroeffentlichung/:kind/:year/:number', (req, res) => {
    const queryParams = {
      id: `${req.params.kind}-${req.params.year}-${req.params.number}`,
      q: req.query.q,
    };
    renderAndCache(req, res, '/publication-details', queryParams);
  });

  server.get('/suche', (req, res) => {
    renderAndCache(req, res, '/suche', req.query);
  });

  server.get('*', (req, res) => handle(req, res));

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});

/*
 * NB: make sure to modify this to take into account anything that should trigger
 * an immediate page change (e.g a locale stored in req.session)
 */
function getCacheKey(req) {
  return `${req.url}`;
}

async function renderAndCache(req, res, pagePath, queryParams) {
  const key = getCacheKey(req);

  // If we have a page in the cache, let's serve it
  if (ssrCache.has(key)) {
    res.setHeader('x-cache', 'HIT');
    res.send(ssrCache.get(key));
    return;
  }

  try {
    // If not let's render the page into HTML
    const html = await app.renderToHTML(req, res, pagePath, queryParams);

    // Something is wrong with the request, let's skip the cache
    if (res.statusCode !== 200) {
      res.send(html);
      return;
    }

    // Let's cache this page
    ssrCache.set(key, html);

    res.setHeader('x-cache', 'MISS');
    res.send(html);
  } catch (err) {
    app.renderError(err, req, res, pagePath, queryParams);
  }
}
