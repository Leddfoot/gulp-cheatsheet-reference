const gulp = require('gulp');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

/*
-- NECESSARY GULP TOP LEVEL FUNCTIONS --
gulp.task - define tasks
gulp.src - points to files to use
gulp.dest - points to folder where output is fsevents
gulp.watch - watch files and folders for changes
*/

//Example gulp logs message
//access at command line via: gulp message
gulp.task('message', function() {
  return console.log('gulp is running');
});


//Copy all src files to the dist folder
// NOTE: doesn't have to be copyHtml, can be gulp copy or whatever
gulp.task('copyHtml', function() {
  gulp.src(['src/*.html'])
      .pipe(gulp.dest('dist'));
});

//minifying using uglify
//Not using this because this functionality is now included in the concatenation
// moved--.pipe(uglify())-- to concat so that the files will be concat then minified
// gulp.task('minify', function() {
//   gulp.src('src/js/*.js')
//       .pipe(uglify())
//       .pipe(gulp.dest('dist/js'))
// });

//compile Sass
gulp.task('sass', function() {
  gulp.src('src/sass/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('dist/css'));
});
//Combine all js files
gulp.task('concat', function() {
  gulp.src('src/js/*.js')
      .pipe(concat('main.js'))
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'));
});

//access at command line via just: gulp
gulp.task('default', ['message', 'copyHtml', 'sass', 'concat']);

gulp.task('watch', function() {
  gulp.watch('src/js/*.js', ['concat']);
  gulp.watch('src/sass/*.scss', ['sass']);
  gulp.watch('src/*.html', ['copyHtml']);

});
