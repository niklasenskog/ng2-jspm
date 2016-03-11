///*
//This file in the main entry point for defining Gulp tasks and using Gulp plugins.
//Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
//*/

//var gulp = require("gulp");
//var ts = require("gulp-typescript");

//var tsProject = ts.createProject("tsconfig.json");

//gulp.task("scripts", function () {
//    var tsResult = tsProject.src() // instead of gulp.src(...) 
//		.pipe(ts(tsProject));

//    return tsResult.js.pipe(gulp.dest("."));
//});

//gulp.task("default", ["scripts"], function () {
//    // place code for your default task here
//});

var gulp = require("gulp"),
    ts = require("gulp-typescript"),
    merge = require("merge"),
    flatten = require("flatten");

var webroot = "wwwroot";

var paths = {
    tsSource: "./" + webroot + "/app/**/*.ts",
    tsOutput: "./" + webroot + "/app",
    tsDef: "./typings/"
};

var tsCompilerConfig = ts.createProject("tsconfig.json");

gulp.task("ts-compile", function () {
    console.log("Source: " + paths.tsSource);
    var tsResult = gulp.src(paths.tsSource)
        .pipe(ts(tsCompilerConfig));

    return merge([
        tsResult.dts.pipe(gulp.dest(paths.tsDef)),
        tsResult.js.pipe(gulp.dest(paths.tsOutput))
    ]);
});

gulp.task("watch", ["ts-compile"], function () {
    gulp.watch(paths.tsSource, ["ts-compile"]);
});

//gulp.task('copy-defs', function () {
//    gulp.src(paths.importedTypings)
//        .pipe(flatten())
//        .pipe(gulp.dest(paths.tsDef + "/jspmImports/"));
//});