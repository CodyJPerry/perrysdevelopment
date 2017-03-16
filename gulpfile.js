// Configure to use "strict mode""

'use strict';

// Require gulp plugins
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// Sass tasks
gulp.task('styles', function() {
    return gulp.src('./framework/sass/**/*.scss') //Source of files to watch
        .pipe(sass().on('error', sass.logError)) // Logs any errors when sass complies
        .pipe(gulp.dest('./css/'))
});

// Autoprefixer
gulp.task('prefix', function() {
    gulp.src()
});

// Watch task

gulp.task('default', function() {
    gulp.watch('sass/**/*.scss', ['styles'])
});