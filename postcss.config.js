// const cssVariables = require('./src/design-tokens/tokens.css.js');

// module.exports = {
//   plugins: {
//     'postcss-cssnext': {
//       features: {
//         customProperties: {
//           variables: cssVariables,
//         },
//         rem: {
//           rootValue: 10,
//         },
//       },
//     },
//     cssnano: {
//       normalizeUrl: false,
//       discardEmpty: false,
//       core: false,
//       minifyFontValues: false,
//       discardUnused: false,
//     },
//   },
// };

const postCSSColorFunction = require('postcss-color-function');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = () => ({
  plugins: [
    postcssPresetEnv({
      stage: 0,
      importFrom: [
        './src/design-tokens/tokens.css',
        {
          customMedia: {
            '--bp-medium': 'screen and (min-width: 768px)',
            '--bp-large': 'screen and (min-width: 1024px)',
            '--bp-extra-large': 'screen and (min-width: 1424px)',
          },
        },
      ],
      autoprefixer: {grid: true},
      features: {
        'custom-properties': {preserve: true},
      },
    }),
    postCSSColorFunction(),
  ],
});
