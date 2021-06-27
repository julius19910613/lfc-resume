const gulp = require('gulp')
const notify = require('gulp-notify')
const config = require('./config')
const browserSync = require('browser-sync').create()
const reload = browserSync.reload

gulp.task('styles', function () {
    return gulp.src('src/*.css')
        .pipe(reload({stream: true}))
        .pipe(notify({message: 'Styles complete'}))
});

gulp.task('serve', gulp.series('styles', function () {
    browserSync.init({
        server: {
            baseDir: "./src"
        },
        port: config.port,
        // 关闭右上角通知
        notify: false
    })
}))

gulp.task('watch', function() {
    gulp.watch('src/**/*.css', gulp.series('styles'))
    gulp.watch('src/**/*.html', gulp.series(reload))
})