var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	sourcemaps = require('gulp-sourcemaps');

gulp.task('scripts', function(){
		return	gulp.src('js/*.js')
						.pipe(uglify())
						.pipe(gulp.dest('dist/js/'))
});

gulp.task('default', ['scripts']);