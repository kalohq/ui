/* eslint-disable no-param-reassign */
import randomString from 'utils/test/random-string';

// CSS imports return an empty object in tests
require.extensions['.css'] = module => {
  module.exports = {};
};

// Image imports return mock paths in tests
[
  'tiff',
  'png',
  'jpg',
  'svg',
  'ico',
  'woff2',
  'woff',
  'ttf',
  'pdf',
  'eot',
  'gif',
].forEach(extension => {
  require.extensions[`.${extension}`] = module => {
    module.exports = `mock-assets/${randomString()}.${extension}`;
  };
});
