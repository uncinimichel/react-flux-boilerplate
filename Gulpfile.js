var gulp = require('gulp');
var browserify = require('gulp-browserify');
var jest = require('gulp-jest');
var rename = require("gulp-rename");

var browserifyConfig = {
	entries: ['./public/app.js']
};


gulp.task('serve', function () {
});

gulp.task('build', function () {
    return gulp.src('public/app.js')
        .pipe(browserify({
        	transform: ['reactify', 'envify'],
          	debug : true
        }))
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest('./public'))
});

gulp.task('test', function () {
	return gulp.src('./public')
		.pipe(jest({
	        scriptPreprocessor: "../jest-preprocessor.js"
	    }));
});

// Watch
gulp.task('watch', function () {
    // Watch .js files
    gulp.watch('./public/**/*', ['build']);

});