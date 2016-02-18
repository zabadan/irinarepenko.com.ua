

var gulp = require('gulp'),
    sassSCSS = require('gulp-sass'),
    livereload = require('gulp-livereload');

// Default Task
gulp.task('default', ['sass', 'watch']);

// Watch Task
 gulp.task('watch', function(){
  livereload.listen();
  gulp.watch('sass/*.scss', ['sass']).on('change', livereload.changed);
});

// Sass Complie Task
gulp.task('sass', function(){
 gulp.src('sass/*.scss')
  .pipe(sassSCSS())
  .pipe(gulp.dest('build/css'));
});