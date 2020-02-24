importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded Ã°Å¸Å½â€°`);
} else {
    console.log(`Boo! Workbox didn't load Ã°Å¸ËœÂ¬`);
}


// Cache the Google Fonts stylesheets with a stale while revalidate strategy.
workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
    }),
);

// Cache the Google Fonts webfont files with a cache first strategy for 1 year.
workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
      new workbox.cacheableResponse.Plugin({
                statuses: [0, 200],
            }),
      new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 365,
            }),
    ],
    }),
);

//offline top 5 html webpage
 workbox.routing.registerRoute(
  /\.(?:html)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'webpage',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 5,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  }),
); 

//CSS JS cache
workbox.routing.registerRoute(
  /\.(?:js|css)$/,
  new workbox.strategies.StaleWhileRevalidate(),
); 

