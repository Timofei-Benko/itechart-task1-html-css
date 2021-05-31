const gulp = require("gulp");
const del = require("del");
const sass = require("gulp-sass");
const sourcemaps = require('gulp-sourcemaps');
const gulpResolveUrl = require('gulp-resolve-url');

gulp.task('styles', () => {
    return gulp.src('./src/style/scss/**/*.scss', { base: './src'})
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulpResolveUrl())
        .pipe(gulp.dest('./src/style/css'));
});

gulp.task('clean', () => {
    return del([
        'css/main.css',
    ]);
});

gulp.task('watch', () => {
    gulp.watch('./src/style/scss/**/*.scss', (done) => {
        gulp.series(['clean', 'styles'])(done);
    });
});

gulp.task('default', gulp.series(['clean', 'styles']));
