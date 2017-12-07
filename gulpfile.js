const gulp = require('gulp');
const gutil = require('gulp-util');
const postcss = require('gulp-postcss');
const babel = require('gulp-babel');

const markdownToJSON = require('gulp-markdown-to-json');
const marked = require('marked');

/**
 * Compile component CSS. We also convert variables here
 * to make the published package more consumable.
 */
gulp.task('css', () => {
  return gulp
    .src('./src/components/**/*.css')
    .pipe(postcss())
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
 * Copy component assets (font files, images)
 */
gulp.task('copy-files', () =>
  gulp
    .src(
      'src/components/**/*(*.woff|*.woff2|*.ttf|*.jpg|*.jpeg|*.png|*.gif|*.svg)'
    )
    .pipe(gulp.dest('lib'))
);

/**
 * Convert component markdown documentation into
 * JSON for the docs to consume
 */

gulp.task('docs:markdown', () => {
  gulp
    .src('./src/components/**/*.md')
    .pipe(gutil.buffer())
    .pipe(markdownToJSON(marked, './docs/content/components/_data.json'))
    .pipe(gulp.dest('.'));
});
/**
 * General tasks
 */
gulp.task('build-production', ['css', 'js-components', 'copy-files']);
