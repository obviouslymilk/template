import autoprefixer from 'autoprefixer';
import postcssNesting from 'postcss-nesting';

/** @type {import('postcss-load-config').Config} */
export default {
  plugins: [
    autoprefixer,
    postcssNesting,
  ],
};
