const gulp = require('gulp');
const postcss = require('gulp-postcss');
const babel = require('gulp-babel');
const concat = require('gulp-concat');

/**
 * Compile component CSS. We also convert variables here
 * to make the published package more consumable.
 */
gulp.task('npm:css', () => {
  return gulp
    .src('./src/components/**/*.css')
    .pipe(postcss())
    .pipe(gulp.dest('lib/components'));
});

/**
 * Compile component JS from ES6/JSX down to ES5
 */
gulp.task('npm:js', () =>
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
gulp.task('npm:copy-files', () =>
  gulp
    .src(
      'src/components/**/*(*.woff|*.woff2|*.ttf|*.jpg|*.jpeg|*.png|*.gif|*.svg)'
    )
    .pipe(gulp.dest('lib/components'))
);

/**
 * Copy design tokens to lib
 */
gulp.task('npm:copy-design-tokens', () =>
  gulp
    .src(['src/design-tokens/*(*.js|*.json|*.css)'])
    .pipe(gulp.dest('lib/design-tokens'))
);

/**
 * Copy design tokens to lib
 */
gulp.task('npm:copy-design-tokens', () =>
  gulp
    .src(['src/design-tokens/*(*.js|*.json|*.css)'])
    .pipe(gulp.dest('lib/design-tokens'))
);

/**
 * Copy icons to lib
 */
gulp.task('npm:copy-icons', () =>
  gulp.src(['src/icons/**/*']).pipe(gulp.dest('lib/icons'))
);

/**
 * Copy compiled CSS to NPM lib
 */
gulp.task('npm:build-bundled-css', () =>
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
gulp.task('npm:build-core-css', () =>
  gulp
    .src(['./src/styles/kalo-ui-*.css'])
    .pipe(postcss())
    .pipe(gulp.dest('lib/styles'))
);

/**
 * Copy fonts
 */

gulp.task('npm:copy-font-files', () =>
  gulp.src('src/styles/fonts/**/*').pipe(gulp.dest('lib/styles/fonts'))
);

/**
 * ===========
 * Core Tasks
 * ===========
 */

gulp.task('build-npm-package', [
  'npm:css',
  'npm:js',
  'npm:copy-files',
  'npm:copy-design-tokens',
  'npm:copy-icons',
  'npm:build-bundled-css',
  'npm:build-core-css',
  'npm:copy-font-files',
]);
