let gulp  = require('gulp');
let include = require("gulp-include");
let config = require('../config');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('html', function () {
    gulp.src(config.src.root+'*.html')
        .pipe(include())
        .on('error', function(){notify("HTML include error");})
        .pipe(gulp.dest(config.dest.root))
        .pipe(reload({stream: true}));
});

gulp.task('html:watch', function() {
    gulp.watch([
        config.src.root+'*.html'
    ], ['html']);
});