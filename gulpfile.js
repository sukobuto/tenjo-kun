var gulp = require('gulp');
var typescript = require('gulp-typescript');
var concat = require('gulp-concat-sourcemap');
var sourcemaps = require('gulp-sourcemaps');
var wrapper = require('gulp-wrapper');
var plumber = require('gulp-plumber');

//TypeScriptのタスク
gulp.task('typescript',function(){
	gulp.src(['src/**/*.ts'])
		.pipe(plumber()) //エラーしてもウォッチを途中でやめないための処理
		.pipe(sourcemaps.init())
		.pipe(typescript({
			sortOutput: true
		}))
		.pipe(concat('app.js'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('www/js'));
});

gulp.task('templates',function() {
	gulp.src(['src/**/*.t.html'])
		.pipe(wrapper({
			header: '<script type="text/html" id="${filename}">\n',
			footer: '</script>'
		}))
		.pipe(concat('templates.html'))
		.pipe(gulp.dest('www'));
});

//watchのタスク
gulp.task('watch',function(){
	gulp.watch('src/**/*',function(event){
		gulp.run('typescript');
		gulp.run('templates');
	});
});

//defaultで実行するタスクを設定
gulp.task('default',function(){
	gulp.run('watch');
});