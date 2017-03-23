let gulp        = require('gulp');
let browserSync = require('browser-sync');
let config = require('../config');
//webserver
gulp.task('server', function() {
    browserSync({
        server: {
            baseDir: config.dest.root
        },
        files: [config.dest.html + '*.html', config.dest.css + '*.css', config.dest.js + '*.js'],
        port: 3000,
        notify: false,
        ghostMode: false,
        online: false,
        open: true
    });
});