const cssVariables = require('./src/design-tokens/tokens.js');

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
    },
  },
};
