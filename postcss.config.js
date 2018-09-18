const cssVariables = require('./src/design-tokens/tokens.css.js');

module.exports = {
  plugins: {
    'postcss-cssnext': {
      features: {
        customProperties: {
          variables: cssVariables,
        },
      },
    },
    cssnano: {
      normalizeUrl: false,
      discardEmpty: false,
      core: false,
      minifyFontValues: false,
      discardUnused: false,
    },
  },
};
