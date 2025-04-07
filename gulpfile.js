const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
require('dotenv').config();

const outputDirs = {
  local: './',
  // add the path to your obsidian theme folder within a .env file (it will be git-ignored), so gulp can compile the theme directly into your obsidian instance.
  obsidian: process.env.OBSIDIAN_THEME_PATH || './',
};

function style() {
  if (outputDirs.obsidian === './') {
    console.error('Please add the path to your obsidian theme folder within a .env file, using the OBSIDIAN_THEME_PATH environment variable.');
    return;
  }
  return gulp.src('./scss/obsidian.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(outputDirs.local))
    .pipe(rename('firefly-dev.css'))
    .pipe(gulp.dest(outputDirs.obsidian));
}

function watch() {
  gulp.watch('./scss/**/*.scss', style);
}

exports.style = style;
exports.watch = watch;
