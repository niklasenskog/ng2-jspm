/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require("gulp");
var ts = require("gulp-typescript");

var tsProject = ts.createProject("tsconfig.json");

gulp.task("scripts", function () {
    var tsResult = tsProject.src() // instead of gulp.src(...) 
		.pipe(ts(tsProject));

    return tsResult.js.pipe(gulp.dest("."));
});

gulp.task("default", ["scripts"], function () {
    // place code for your default task here
});