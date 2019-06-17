const postcssPresetEnv = require('postcss-preset-env');
const cssVariables = require('./src/design-tokens/tokens.css.js');
const cssnano = require('cssnano');

module.exports = () => ({
  plugins: [
    postcssPresetEnv({
      autoprefixer: {grid: true},
      features: {
        'custom-properties': {variables: cssVariables},
      },
    }),
    cssnano({
      normalizeUrl: false,
      discardEmpty: false,
      core: false,
      minifyFontValues: false,
      discardUnused: false,
      zindex: false,
    }),
  ],
});
