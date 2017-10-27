const cssVariables = require('./src/constants/color');

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
    },
  },
};
