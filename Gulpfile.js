
var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer =require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var eslint =require('gulp-eslint');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var babelify = require('babelify');
var watchify = require('watchify');
var gutil = require('gulp-util');
var browserSync = require('browser-sync');
var reload = browserSync.reload;


var b = browserify({
		entries: './app/js/app.jsx',
		transform: [babelify],
		plugin: [watchify],
		extensions:['.jsx'],
		cache:{},
		packageCache: {},
		debug:true
	})


function bundle(){
	gutil.log('Compiling Javascript to ES5...');
	return b.bundle()
		   .on('error',gutil.log.bind(gutil,'Browserify Error'))
		   .pipe(source('app.js'))
		   .pipe(buffer())
		   .pipe(sourcemaps.init({loadMaps:true}))
		   .pipe(sourcemaps.write('./'))
		   .pipe(gulp.dest('app/js/'))
		   .pipe(browserSync.stream());
}

gulp.task('compilejs',bundle);
b.on('update',bundle);
b.on('log',gutil.log);



gulp.task('styles',function(){
	return gulp.src('sass/**/*.scss')
		.pipe(sass().on('error',sass.logError))
		.pipe(autoprefixer())
		.pipe(gulp.dest('app/css/'))
		.pipe(reload({stream:true}))
		.pipe(rename({suffix:'.min'}))
		.pipe(sourcemaps.init())
		.pipe(cssnano())
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('app/css/'))
})

gulp.task('default',['styles'],function(){
	browserSync.init({
		server:{
			baseDir: ["app","assets"]
		}
	})
	gulp.watch('sass/**/*.scss',["styles"]);
	gulp.watch('app/*.html').on('change',reload);
})


