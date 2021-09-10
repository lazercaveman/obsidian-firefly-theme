const gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

function style() {
  return gulp.src('./src/Firefly.scss')
  .pipe(sass())
  .pipe(gulp.dest('./'))
  .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('./src/**/*.scss', style);
}

exports.style = style;
exports.watch = watch;
