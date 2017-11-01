const cssVariables = require('./src/.tokens.json');

module.exports = {
  plugins: {
    'postcss-cssnext': {
      features: {
        customProperties: {
          variables: cssVariables.color,
        },
      },
    },
    cssnano: {
      normalizeUrl: false,
      discardEmpty: false,
    },
  },
};
