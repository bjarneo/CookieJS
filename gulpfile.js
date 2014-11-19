var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

gulp.task('default', function () {
    return gulp.src('cookie.js')
        .pipe(concat('cookie.min.js'))
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(uglify())
        .pipe(gulp.dest(''));
});