const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

//sass a css, tanto custom como bootstrap
gulp.task('sass', () => {
  return gulp.src([

    'src/scss/*.scss'
  ])
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(gulp.dest('src/css'))
  .pipe(browserSync.stream());
});



//tarea servidor estatico sin update ejecucion sass en primer gulp
gulp.task('serve', ['sass'], () => {
  browserSync.init({
    server: './src'
  });


  gulp.watch([

    'src/scss/*.scss'
  ], ['sass']);

  gulp.watch('src/*.html').on('change', browserSync.reload);
  gulp.watch('src/*.js').on('change', browserSync.reload);
});
//copia de font-awesome a src/css
gulp.task('font-awesome', () => {
  return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
  .pipe(gulp.dest('src/css'));
})
//dependencia de los fonts para css de awesome
gulp.task('fonts', () => {
  return gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('src/fonts'));
});

//ejecucion de todas las tareas
gulp.task('default', ['serve', 'font-awesome', 'fonts']);