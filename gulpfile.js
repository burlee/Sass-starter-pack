const gulp = require('gulp');
const browsersync = require('browser-sync').create();
const sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src(['src/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
    .pipe(browsersync.stream())
});

gulp.task('serve', ['sass'], function(){
    browsersync.init({
        server: './src'
    });

    gulp.watch(['src/scss/*.scss'], ['sass']);
    gulp.watch(['src/*.html']).on('change', browsersync.reload)
});

gulp.task('default', ['serve']);