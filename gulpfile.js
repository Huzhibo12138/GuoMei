const uglify = require('gulp-uglify');  //js压缩模块
const css = require('gulp-clean-css'); //css压缩模块
const html = require('gulp-htmlmin'); //html压缩模块
const concat = require('gulp-concat'); //js&css合并模块
const connect = require('gulp-connect'); //自动刷新模块
const sass = require('gulp-sass');  //sass转css模块
const gulp = require('gulp'); //gulp模块
// 压缩html文件配置,不用合并
gulp.task('jsmin',() => {
    gulp.src('./src/js/*.js')
        .pipe(uglify())  //压缩
        .pipe(gulp.dest('./cause/js'))
        .pipe(connect.reload());
});

// 压缩css文件配置
gulp.task('cssmin',() => {
       gulp.src('./src/scss/*.scss')
           .pipe(sass())
           .on('error',function (error) {
            console.log(error);
           })
           .pipe(css())   //压缩
           .pipe(gulp.dest('./cause/css'))
           .pipe(connect.reload());
});

// 压缩js文件配置
gulp.task('htmlmin',() => {
    gulp.src('./src/*.html')
        .pipe(html())   //压缩
        .pipe(gulp.dest('./cause'))
        .pipe(connect.reload());
});

// 默认任务
gulp.task('default', () => {
    // 监听js文件
    gulp.watch('./src/js/*.js',['jsmin'], () => {
        console.log('js文件改动,已压缩');
    });
    // 监听scss文件
    gulp.watch('./src/scss/*.scss',['cssmin'],() => {
        console.log('css文件改动,已压缩');
    });
    // 监听html文件
    gulp.watch('./src/*.html',['htmlmin'],() => {
        console.log('html文件改动,已压缩');
    });
    // 自动刷新
    connect.server({
        root:'cause',
        port:'80',
        livereload:true
    });
});
