const gulp = require('gulp');
const img2svg = require('./index');

gulp.task('default', () => {
    return gulp.src('test/*.jpg')
        .pipe(img2svg())
        .pipe(gulp.dest('test/icons/'));
});
