const gulp = require('gulp');
const postcss = require('gulp-postcss');
const babel = require('gulp-babel');
const concat = require('gulp-concat');

/**
 * Compile component CSS. We also convert variables here
 * to make the published package more consumable.
 */
gulp.task('shared:css', () => {
  return gulp
    .src('./src/components/**/*.css')
    .pipe(postcss())
    .pipe(gulp.dest('lib/components'));
});

/**
 * Compile React components JS from ES6/JSX down to ES5
 */
gulp.task('react:js', () =>
  gulp
    .src([
      '!src/**/*.js',
      'src/**/*.react.js',
      'src/**/index.js',
      '!**/__tests__/*',
      '!src/design-tokens/*',
      '!**/__examples__/*',
      '!src/utils/test/**/*',
    ])
    .pipe(
      babel({
        presets: ['es2015', 'react', 'stage-2'],
        ignore: ['__tests__', '__examples__'],
      })
    )
    .pipe(gulp.dest('lib'))
);

/**
 * Compile vanilla JS from ES6 down to ES5
 */
gulp.task('vanilla:js', () =>
  gulp
    .src([
      'src/**/*.js',
      '!src/**/*.react.js',
      '!**/__tests__/*',
      '!src/design-tokens/*',
      '!**/__examples__/*',
      '!src/utils/test/**/*',
    ])
    .pipe(
      babel({
        presets: ['es2015', 'stage-2'],
        ignore: ['__tests__', '__examples__'],
      })
    )
    .pipe(gulp.dest('lib'))
);

/**
 * Copy component assets (font files, images)
 */
gulp.task('shared:copy-files', () =>
  gulp
    .src(
      'src/components/**/*(*.woff|*.woff2|*.ttf|*.jpg|*.jpeg|*.png|*.gif|*.svg)'
    )
    .pipe(gulp.dest('lib/components'))
);

/**
 * Copy design tokens to lib
 */
gulp.task('shared:copy-design-tokens', () =>
  gulp
    .src(['src/design-tokens/*(*.js|*.json|*.css)'])
    .pipe(gulp.dest('lib/design-tokens'))
);

/**
 * Copy icons to lib
 */
gulp.task('shared:copy-icons', () =>
  gulp.src(['src/icons/**/*']).pipe(gulp.dest('lib/icons'))
);

/**
 * Copy compiled CSS to NPM lib
 */
gulp.task('vanilla:build-bundled-css', () =>
  gulp
    .src([
      './src/components/**/*.css',
      '!./src/components/**/*.react.css',
      '!./src/components/grid/grid.css',
    ])
    .pipe(concat('ui-bundle.css'))
    .pipe(postcss())
    .pipe(gulp.dest('lib'))
);

/**
 * Copy and compile core stylesheets
 */
gulp.task('shared:build-core-css', () =>
  gulp
    .src(['./src/styles/kalo-ui-*.css'])
    .pipe(postcss())
    .pipe(gulp.dest('lib/styles'))
);

/**
 * ===========
 * Core Tasks
 * ===========
 */
gulp.task(
  'build-npm-package',
  gulp.series(
    'react:js',
    'vanilla:js',
    'shared:css',
    'shared:copy-files',
    'shared:copy-design-tokens',
    'shared:copy-icons',
    'vanilla:build-bundled-css',
    'shared:build-core-css'
  )
);

gulp.task('watch', () => {
  gulp.watch(
    ['./src/components/**/*.module.css'],
    gulp.parallel('vanilla:build-bundled-css')
  );
});
