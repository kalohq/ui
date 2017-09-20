/* eslint-disable */
process.env.BABEL_ENV = 'test';

module.exports = function(wallaby) {
  return {
    files: [
      {pattern: 'src/**/__tests__/**/*.test.js', ignore: true},
      {pattern: 'src/**/__tests__/**/*.tests.js', ignore: true},
      'src/**/*.js',
      'src/**/*.jsx',
      'src/**/*.css',
      'src/**/*.gif',
      'src/**/*.png',
      'src/**/*.jpg',
      'src/**/*.svg',
      'src/**/*.pdf',
      'src/**/*.html',
    ],

    tests: ['src/**/__tests__/**/*.test.js', 'src/**/__tests__/**/*.tests.js'],

    env: {
      type: 'node',
      runner: 'node',
    },

    workers: {
      recycle: true,
    },

    compilers: {
      '**/*.js': wallaby.compilers.babel(),
    },

    testFramework: 'jest',

    // bootstrap: function(wallaby) {
    //   var path = require('path');
    //   process.env.NODE_ENV = 'test';
    //   process.env.NODE_PATH = path.join(wallaby.projectCacheDir, 'src');
    //   require('module').Module._initPaths();
    //   // require('utils/test/require-hooks');
    // },
  };
};
