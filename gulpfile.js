const gulp = require("gulp");
const del = require("del");
const sass = require("gulp-sass");
const connect = require("gulp-connect");
// // const sourcemaps = require('gulp-sourcemaps');
// const gulpResolveUrl = require('gulp-resolve-url');

gulp.task('styles', () => {
    return gulp.src('./src/style/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/style/css'))
        .pipe(connect.reload());
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

gulp.task('webserver', function() {
    connect.server({
        root: 'src',
        livereload: true,
    });
});

gulp.task('default', gulp.series(['webserver', 'watch']));
