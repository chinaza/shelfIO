'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');

gulp.task('sass', function () {
  return gulp.src('./src/scss/main.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(rename('shelfio.min.css'))
  .pipe(sourcemaps.write('./maps'))
  .pipe(gulp.dest('./dist/css'));
});

gulp.task('ts', function () {
  tsProject.src()
  .pipe(ts(tsProject))
  .js.pipe(gulp.dest("dist/js"));

  gulp.src("./dist/js/main.js")
  .pipe(rename("shelfio.min.js"))
  .pipe(gulp.dest("./dist/js"));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/scss/**/*.scss', ['sass']);
});

gulp.task('imgcompress', function () {
  return gulp.src('./src/img/**')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/img'));
});

// default gulp task
gulp.task('default', ['sass', 'ts', 'imgcompress'], function() {
  gulp.watch('./src/scss/**/*.scss', ['sass']);
  gulp.watch('./src/ts/**/*.ts', ['ts']);
});
