let gulp = require('gulp'),
    notify = require('gulp-notify'),
    plumber = require("gulp-plumber"),
    config = require('../config'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

const JS_PAGES_DIR = ([
                `${config.src.js}lib/jquery.min.js`,
                `${config.src.js}lib/owl.carousel.min.js`,
                `${config.src.js}custom.js`,
                `${config.src.js}*.js`]);

const JS_DIR = `${config.src.js}/**/*.js`;
const JS_MINIFY_NAME = 'custom.min.js';

let success_build_js_files = 'JS files have been completed';
let js_task_name = 'js';
let js_watch_task_name = 'js:watch';

gulp.task(js_task_name, function() {
    gulp.src(JS_PAGES_DIR)
        .pipe(uglify())
        .pipe(plumber({errorHandler: notify.onError(function(error){return error.message;})}))
        .pipe(concat(JS_MINIFY_NAME))
        .pipe(gulp.dest('build/js'))
        .pipe(notify(success_build_js_files));
});

gulp.task(js_watch_task_name, function() {
    gulp.watch(JS_DIR, [js_task_name]);
});
