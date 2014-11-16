var gulp = require('gulp');
var typescript = require('gulp-tsc');
var concat = require('gulp-concat');
var concat_sm = require('gulp-concat-sourcemap');
var sourcemaps = require('gulp-sourcemaps');
var wrapper = require('gulp-wrapper');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var include = require('gulp-include');

//TypeScriptのタスク
gulp.task('typescript',function(){
	gulp.src([
		'src/App.ts'
	])
		//.pipe(plumber()) //エラーしてもウォッチを途中でやめないための処理
		.pipe(typescript({
			out: 'app.js',
			target: 'ES5'
		}))
		.pipe(gulp.dest('www/js'));
});

gulp.task('templates',function() {
	return gulp.src(['src/**/*.t.html'])
		.pipe(wrapper({
			header: '<script type="text/html" id="${filename}">\n',
			footer: '</script>'
		}))
		.pipe(concat('templates.html'))
		.pipe(gulp.dest('www'))
		.on('end', function() {
			gulp.src(['www/index.src.html'])
				.pipe(include())
				.pipe(rename('index.html'))
				.pipe(gulp.dest('www'));
		})
});

//watchのタスク
gulp.task('watch',function(){
	gulp.watch('src/**/*',['typescript', 'templates']);
});

//defaultで実行するタスクを設定
gulp.task('default',['typescript', 'templates']);