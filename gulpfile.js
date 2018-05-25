var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');

// var gulp = require('gulp-concat');

gulp.task('hello',function(){
    console.log('哈哈哈哈哈哈哈');
});

// gulp.task('default',['hello']);

// gulp.task('index-copy',function(){ 
//      //找到源文件      pipe()//使用功能 可以传入一个参数作为目标    gulp.dest()会保存到对应文件夹
//      return gulp.src('index.html').pipe(gulp.dest('dist'))
// });

gulp.task('images-copy',function(){

    return gulp.src('./src/imgs/**/*').pipe(gulp.dest('dist/images'))//*代表所有

})
gulp.task('data',function(){
    return gulp.src(['xml/*.list','json/*.json']).pipe(gulp.dest('dist/data'))
})

gulp.task('build',['index-copy','images-copy','data'],function(){

    console.log('编译成功')
})

// gulp.watch()
//gulp.task('index-copy',function(){
//
//  return gulp.src('index.html').pipe(gulp.dest('dist')).pipe(connect.reload());
//
//})

gulp.task('index-copy',function(){

    return gulp.src('./src/*.html').pipe(gulp.dest('./dist')).pipe(connect.reload());

})
gulp.task('php-copy',function(){

    return gulp.src('src/libs/*.php').pipe(gulp.dest('./dist/libs')).pipe(connect.reload());

})
gulp.task('libs-copy',function(){

    return gulp.src('./src/libs/**/*').pipe(gulp.dest('./dist/libs')).pipe(connect.reload());

})
gulp.task('watch',function(){
    gulp.watch('./src/*.html',['index-copy']);
    gulp.watch('./src/images/**/*',['images-copy']);
    gulp.watch('./src/libs/*.php',['php-copy']);
    gulp.watch('./src/libs/**/*',['libs-copy']);
    gulp.watch(['./src/json/*.json','xml/*.xml','!json/secret.json'],['data']);
})

gulp.task('server',function(){
    connect.server({
        root:'dist',
        port:8888,
        livereload:true
    });
//	console.log("port"+8888)
})


// gulp.task('default',['server','watch'])

// gulp.task('sass', function(){
//     //sass()方法用于转换sass到css
//   return gulp.src('/app/scss/styles.scss')
//     .pipe(sass()) // Converts Sass to CSS with gulp-sass
//     .pipe(gulp.dest('app/css'))
// });

gulp.task('sass', function () {
    return gulp.src('./src/**/*.scss')
      .pipe(sass.sync().on('error', sass.logError))
      .pipe(gulp.dest('./dist'))
      .pipe(connect.reload());
  });

  gulp.task('sass:watch', function () {
    gulp.watch('./src/**/*.scss', ['sass']);
  });
   
  gulp.task('default', ['server', 'watch', 'sass:watch']);
  
  gulp.task('scripts',function(){
    return gulp.src(['scripts/hz.js','scripts/index.js']).pipe(concat('vendor.js')).pipe(gulp.dest('dist/js'))
  })



