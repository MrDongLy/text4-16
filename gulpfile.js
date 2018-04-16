var gulp = require("gulp");
var server = require("gulp-webserver");//启服务
var minCss = require("gulp-clean-css");//压缩css
var imgmin = require("gulp-imagemin");//压缩img
var htmlmin = require("gulp-htmlmin");//压缩html
var jsmin = require("gulp-uglify");//压缩js


gulp.task("server",function(){
	gulp.src("./src")
		.pipe(server({
			port:8080,
			open:true,
			livereload: true,
            host: 'localhost'
		}))
})

//gulp.task("mincss",function(){
//	
//})
//gulp.task("htmlMin",function(){
//	
//})
//gulp.task("minJs",function(){
//	
//})
//gulp.task('default', function(op) {
//  sequence(['mincss', 'htmlMin', 'minJs'], 'server',op)
//});
