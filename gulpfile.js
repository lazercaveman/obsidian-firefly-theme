const gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

function style() {
  return gulp.src('./scss/obsidian.scss')
  .pipe(sass())
  .pipe(gulp.dest('./'));
}

function watch() {
  gulp.watch('./scss/**/*.scss', style);
}

exports.style = style;
exports.watch = watch;
