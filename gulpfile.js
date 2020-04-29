/* global require */
var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var lec = require('gulp-line-ending-corrector');

/* Change your directory and settings here */
var settings = {
    publicDir: './',
    sassDir: './assets/scss',
    cssDir: './assets/css',
    /* change to disable system notification */
    systemNotify: true,
    proxy: ''
}

gulp.task('serve', ['sass'], function () {
    /**
     * watch for changes in sass files
     */
    gulp.watch("./assets/sass/**/*.scss", ['sass']);
});

/**
 * sass task, will compile the .SCSS files,
 * and handle the error through plumber and notify through system message.
 */
gulp.task('sass', function () {
    return gulp.src('./assets/sass/**/*.scss')
        .pipe(plumber({
            errorHandler: settings.systemNotify ? notify.onError("Error: <%= error.messageOriginal %>") : function (err) {
                console.log(" ************** \n " + err.messageOriginal + "\n ************** ");
                this.emit('end');
            }
        }))
        .pipe(sass({outputStyle: 'expanded'})) /* compressed */
        .pipe(autoprefixer({
            browsers: ['last 6 versions'],
            cascade: false
        }))
        .pipe(lec({verbose:true, eolc: 'CRLF', encoding:'utf8'}))

        .pipe(gulp.dest('./assets/css/'))
});

gulp.task('default', ['serve']);

