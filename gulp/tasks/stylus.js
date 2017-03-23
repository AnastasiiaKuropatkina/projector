let gulp = require('gulp');
let notify = require('gulp-notify');
let plumber = require("gulp-plumber");
let stylus = require('gulp-stylus');
let cssnano = require('gulp-cssnano');
let autoprefixer = require('autoprefixer-stylus');
let config = require('../config');

const STYLUS_PAGES_DIR = `${config.src.stylus}/*.styl`;
const STYLUS_DIR = `${config.src.stylus}/**/*.styl`;
//console.log(STYLUS_DIR);
let success_build_stylus_files = 'Stylus files have been completed';
let stylus_task_name = 'stylus';
let stylus_watch_task_name = 'stylus:watch';

gulp.task(stylus_task_name, function() {
    return gulp.src([STYLUS_PAGES_DIR])
        .pipe(plumber({errorHandler: notify.onError(function(error){return error.message;})}))
        .pipe(stylus({'include css': true}))//.use(autoprefixer())
        .pipe(cssnano())
        .pipe(gulp.dest('build/css'))
        .pipe(notify(success_build_stylus_files));
});
gulp.task(stylus_watch_task_name, function() {
    gulp.watch(STYLUS_DIR, [stylus_task_name]);
});
