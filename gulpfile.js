const gulp = require('gulp');
const less = require('gulp-less');
const sourcemaps = require('gulp-sourcemaps');
const args = require('yargs').argv;

/*  Default Task
----------------------------------------------------------- */

gulp.task('less', () => gulp
  .src('./src/css/style.less')
  .pipe(sourcemaps.init())
  .pipe(less())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./dist/')));

/*  Default Task
----------------------------------------------------------- */

gulp.task('default', ['less'], () => {
  if (args.watch) {
    gulp.watch('./src/css/**/*.less', ['less']);
  }
});
