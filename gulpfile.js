const gulp = require('gulp');
const postcss = require('gulp-postcss');
const babel = require('gulp-babel');
const theo = require('gulp-theo');
const header = require('gulp-header');

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
 * Compile design token configuration
 */
gulp.task('tokens:css', () =>
  gulp
    .src('config/design-tokens/color.yml')
    .pipe(
      theo.plugin({
        transform: {type: 'web'},
        format: {type: 'custom-properties.css'},
      })
    )
    .pipe(
      header(
        '/* This is a generated file. Update in `/config/.tokens.yml` and use `gulp tokens` to regen! */'
      )
    )
    .pipe(gulp.dest('src/tokens'))
);

gulp.task('tokens:json', () =>
  gulp
    .src('config/design-tokens/color.yml')
    .pipe(
      theo.plugin({
        transform: {type: 'web'},
        format: {type: 'json'},
      })
    )
    .pipe(gulp.dest('src/tokens'))
);

gulp.task('tokens:module', () =>
  gulp
    .src('config/design-tokens/color.yml')
    .pipe(
      theo.plugin({
        transform: {type: 'web'},
        format: {type: 'module.js'},
      })
    )
    .pipe(
      header(
        '/* This is a generated file. Update in `/config/.tokens.yml` and use `gulp tokens` to regen! */'
      )
    )
    .pipe(gulp.dest('src/tokens'))
);

gulp.task('tokens:raw', () =>
  gulp
    .src('config/.tokens.yml')
    .pipe(
      theo.plugin({
        transform: {type: 'web'},
        format: {type: 'raw.json'},
      })
    )
    .pipe(gulp.dest('src/tokens'))
);

gulp.task('tokens', [
  'tokens:css',
  'tokens:json',
  'tokens:module',
  'tokens:raw',
]);

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
 * General tasks
 */
gulp.task('build-production', ['tokens', 'css', 'js-components', 'copy-files']);
