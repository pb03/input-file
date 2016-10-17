var gulp = require('gulp'),
uglify = require('gulp-uglify'),
rename = require('gulp-rename');

/**
 * Uglify JS
 */
gulp.task('uglifyjs', function() {
  return gulp.src('input-file.js')
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest('./'));
});

/**
 * Default task, watch changes
 */
gulp.task('default', ['uglifyjs'], function() {
  gulp.watch('input-file.js', ['uglifyjs']);
});