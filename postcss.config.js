import postcssGlobalData from '@csstools/postcss-global-data';
import postcssPresetEnv from 'postcss-preset-env';

/** @type {import('postcss-load-config').Config} */
export default {
  plugins: [
    postcssGlobalData({
      files: [
        './src/assets/css/media-queries.css',
      ]
    }),
    postcssPresetEnv({
      stage: 2,
    }),
  ],
};
