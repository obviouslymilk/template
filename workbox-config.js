module.exports = {
  globDirectory: 'dist/',
  globPatterns: [
    '**/*.{js,css,html}',
  ],
  swDest: 'dist/sw.js',
  ignoreURLParametersMatching: [
    /^utm_/,
    /^fbclid$/,
  ],
  runtimeCaching: [
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg|webp|ico|woff2)$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'assets',
      },
    },
    {
      urlPattern: /\.(?:html|js|css)$/,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'static',
      },
    },
  ],
};
