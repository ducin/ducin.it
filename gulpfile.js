var gulp = require('gulp');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var cleanCSS = require('gulp-clean-css');

var cfg = {
  js: {
    vendor: [
      './node_modules/angular/angular.min.js',
      './node_modules/angular-translate/dist/angular-translate.min.js',
      './node_modules/angular-bootstrap/ui-bootstrap.min.js',
      './node_modules/angular-bootstrap/ui-bootstrap-tpls.min.js'
    ],
    app: './app/js/*'
  },
  css: {
    vendor: [
      './node_modules/bootstrap/dist/css/bootstrap.css',
      './node_modules/font-awesome/css/font-awesome.css'
    ],
    app: './app/css/*'
  },
  fonts: [
    './app/fonts/**/*',
    './node_modules/font-awesome/fonts/**/*',
    './node_modules/bootstrap/fonts/**/*'
  ]
};

gulp.task('clean', function () {
  return gulp.src('./dist', {read: false})
    .pipe(clean());
});

gulp.task('vendor-js', function() {
  return gulp.src(cfg.js.vendor)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('app-js', function() {
  return gulp.src(cfg.js.app)
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('vendor-css', function() {
  return gulp.src(cfg.css.vendor)
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('app-css', function() {
  return gulp.src(cfg.css.app)
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(concat('app.css'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('fonts', function() {
  gulp.src(cfg.fonts)
    .pipe(gulp.dest('./fonts'));
});

gulp.task('build', [
  'clean',
  'vendor-js',
  'app-js',
  'vendor-css',
  'app-css',
  'fonts'
]);

gulp.task('default', ['build']);
