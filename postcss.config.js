import autoprefixer from 'autoprefixer';
import postcssNesting from 'postcss-nesting';
import postcssPresetEnv from 'postcss-preset-env';

/** @type {import('postcss-load-config').Config} */
export default {
  plugins: [
    autoprefixer,
    postcssNesting,
    postcssPresetEnv,
  ],
};
