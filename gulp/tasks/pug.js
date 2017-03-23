let gulp = require('gulp');
let notify = require('gulp-notify');
let plumber = require("gulp-plumber");
let pug = require("gulp-pug");
let config = require('../config');

const PUG_PAGES_DIR = `${config.src.pug}/pages/*.pug`;
const PUG_DIR = `${config.src.pug}/**/*.pug`;

let success_build_pug_files = 'Pug files have been completed';
let pug_task_name = 'pug';
let pug_watch_task_name = 'pug:watch';

gulp.task(pug_task_name, function() {

    return gulp.src([
        PUG_PAGES_DIR
    ])
        .pipe(plumber({errorHandler: notify.onError(function(error){return error.message;})}))
        .pipe(pug({pretty: true}))
        .pipe(notify(success_build_pug_files))
        .pipe(gulp.dest(config.dest.html));
});

gulp.task(pug_watch_task_name, function() {
    gulp.watch(PUG_DIR, [pug_task_name]);
});
