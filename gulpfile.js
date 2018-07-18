var gulp = require('gulp');

// Requires the gulp-sass plugin
var sass = require('gulp-sass');

var haml = require('gulp-haml');

var gih = require('gulp-include-html');

var browserSync = require('browser-sync').create();

gulp.task('hello', function() {
    console.log('Hello Nice Guy');
  });

  gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: 'app'
      },
    })
  })

  gulp.task('sass', function(){
    return gulp.src('app/styles/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
      .pipe(sass()) // Converts Sass to CSS with gulp-sass
      .pipe(gulp.dest('app/css'))
      .pipe(browserSync.reload({
        stream: true
      }))
  });

  gulp.task('watch', ['browserSync', 'sass'], function (){
    gulp.watch('app/scss/**/*.scss', ['sass']); 
    // Other watchers
  });

  gulp.task('haml', function() {
    return gulp.src('.app/**/*.haml')
     .pipe(haml())
     .pipe(gulp.dest('app/html'))
   });
   