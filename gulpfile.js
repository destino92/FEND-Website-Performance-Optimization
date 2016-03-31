var gulp = require('gulp'),
	cleanCSS = require('gulp-clean-css');
	uglify = require('gulp-uglify'),
	concatify = require('gulp-concat'),
	sourcemaps = require('gulp-sourcemaps');

gulp.task('scripts', function(){
	return gulp.src('js/*.js')
		.pipe(sourcemaps.init())
			.pipe(uglify())
			.pipe(concatify('permatters.js'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('dist/js'))
});


gulp.task('minify-css', function(){
	return gulp.src('css/style.css')
		.pipe(sourcemaps.init())
			.pipe(cleanCSS({compatibility: 'ie8'}))
			.pipe(concatify('style.min.css'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('dist/css/'));
});

gulp.task('default', ['minify-css','scripts']);