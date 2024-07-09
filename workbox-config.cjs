module.exports = {
  globDirectory: 'dist/',
  globPatterns: [
    '**/*.{js,css,woff2}',
  ],
  swDest: 'dist/sw.js',
  ignoreURLParametersMatching: [
    /^utm_/,
    /^fbclid$/,
  ],
  runtimeCaching: [
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg|webp|ico)$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'images',
      },
    },
    {
      urlPattern: /\.(?:html|js|css)$/,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'static'
      }
    }
  ],
};
