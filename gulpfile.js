const gulp = require('gulp');
const gulpCopy = require('gulp-copy');

const postcss = require('gulp-postcss');
const cssnext = require('postcss-cssnext');
const babel = require('gulp-babel');

const cssVariables = require('./src/constants/color.js');

/**
 * Compile component CSS. We also convert variables here
 * to make the published package more consumable.
 */
gulp.task('css', () => {
  return gulp
    .src('./src/components/**/*.css')
    .pipe(
      postcss([
        cssnext({
          features: {
            customProperties: {
              variables: cssVariables,
            },
          },
        }),
      ])
    )
    .pipe(gulp.dest('lib'));
});

/**
 * Compile component JS from ES6/JSX down to ES5
 */
gulp.task('js-components', () =>
  gulp
    .src([
      'src/components/**/*.js',
      '!src/components/**/__tests__/*',
      '!src/components/**/__stories__/*',
    ])
    .pipe(
      babel({
        presets: ['es2015', 'react', 'stage-2'],
        ignore: ['__tests__', '__stories__'],
      })
    )
    .pipe(gulp.dest('lib'))
);

/**
 * Compile JS constants down to ES5
 */
gulp.task('js-constants', () =>
  gulp
    .src('src/constants/**/*.js')
    .pipe(
      babel({
        presets: ['es2015', 'stage-2'],
      })
    )
    .pipe(gulp.dest('lib/constants'))
);

/**
 * Compile font files required for Icon
 */
gulp.task('copy-files', () =>
  gulp
    .src('src/components/icon/fonts/**/*')
    .pipe(gulpCopy('lib/icon', {prefix: 3}))
);

/**
 * General tasks
 */
gulp.task('build-production', [
  'css',
  'js-components',
  'js-constants',
  'copy-files',
]);
