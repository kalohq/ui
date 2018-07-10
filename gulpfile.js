const gulp = require('gulp');
const postcss = require('gulp-postcss');
const babel = require('gulp-babel');

/**
 * Compile component CSS. We also convert variables here
 * to make the published package more consumable.
 */
gulp.task('css', () => {
  return gulp
    .src('./src/components/**/*.css')
    .pipe(postcss())
    .pipe(gulp.dest('lib/components'));
});

/**
 * Compile component JS from ES6/JSX down to ES5
 */
gulp.task('js', () =>
  gulp
    .src([
      'src/**/*.js',
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
 * Copy component assets (font files, images)
 */
gulp.task('copy-files', () =>
  gulp
    .src(
      'src/components/**/*(*.woff|*.woff2|*.ttf|*.jpg|*.jpeg|*.png|*.gif|*.svg)'
    )
    .pipe(gulp.dest('lib/components'))
);

/**
 * Copy design tokens to lib
 */
gulp.task('copy-design-tokens', () =>
  gulp
    .src(['src/design-tokens/*(*.js|*.json|*.css)'])
    .pipe(gulp.dest('lib/design-tokens'))
);

/**
 * General tasks
 */
gulp.task('build-production', [
  'css',
  'js',
  'copy-files',
  'copy-design-tokens',
]);
