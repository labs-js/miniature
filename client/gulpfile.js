var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('connect', function() {
    connect.server({
        root: 'src',
        port:9001,
        livereload: true
    });
});

gulp.task('html', function() {
    gulp.src('./src/*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch(['./src/*.html'], ['html']);
});

gulp.task('default', ['connect', 'watch']);
