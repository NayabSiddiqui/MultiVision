/**
 * Created by nayab on 9/5/16.
 */

var gulp = require('gulp');
var nodemon = new require('gulp-nodemon');

var jsFiles = ['*.js', 'server/**/*.js'];
/*
 gulp.task('style', function () {
 //returning it as a stream so that it can be used as a sub task in other areas
 return gulp.src(jsFiles)
 .pipe(jshint())
 .pipe(jshint.reporter('jshint-stylish', {
 verbose: true
 }))
 .pipe(jscs());
 });

 gulp.task('inject', function () {
 var wiredep = require('wiredep').stream;
 var inject = require('gulp-inject');

 var injectSrc = gulp.src(['./public/css/!*.css', './public/js/!*.js'],
 {read: false});

 var options = {
 bowerJson: require('./bower.json'),
 directory: './public/lib',
 ignorePath: '../../public'
 };

 var injectOptions = {
 ignorePath: ['../../public', '/public']
 };

 return gulp.src('./src/views/!*.jade')
 .pipe(wiredep(options))
 .pipe(inject(injectSrc, injectOptions))
 .pipe(gulp.dest('./src/views'));
 });*/

gulp.task('inject', function () {
    var bowerFiles = require('main-bower-files'),
        inject = require('gulp-inject'),
        stylus = require('gulp-stylus'),
        angularFileSort = require('gulp-angular-filesort');

    var ignorePaths = ['../../public', '/public'];

    return gulp.src('./server/**/*.jade')
        .pipe(inject(
            gulp.src(bowerFiles()),
            {
                ignorePath: ignorePaths
            }
        ))
        .pipe(inject(
            gulp.src('./public/css/*.styl')
                .pipe(stylus()),
            {
                name: 'stylus',
                ignorePath: ignorePaths
            }
        ))
        .pipe(inject(
            gulp.src(['./public/app/**/*.js'])
                .pipe(angularFileSort()).pipe(angularFileSort()),
            {
                name: 'angular',
                ignorePath: ignorePaths
            }

        ))
        .pipe(inject(
            gulp.src(['./public/css/*.css', './public/js/*.js']),
            {
                name: 'site',
                ignorePath: ignorePaths
            }))
        .pipe(gulp.dest('./server'));
});

gulp.task('serve', ['inject'], function () {
    var options = {
        script: 'server.js',
        delayTime: 1,
        env: {
            'PORT': 3030
        },
        watch: jsFiles
    };

    return nodemon(options)
        .on('restart', function (env) {
            console.log('Restarting...');
        });
});