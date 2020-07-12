const { series, src, dest, parallel, watch } = require("gulp");
var gulp = require("gulp"),
	concat = require("gulp-concat"),
	sass = require("gulp-sass"),
	autoprefixer = require("gulp-autoprefixer"),
	pug = require("gulp-pug"),
	sourcemaps = require("gulp-sourcemaps"),
	minify = require("gulp-minify");

// pug-html task
gulp.task("html", function () {
	return gulp
		.src("stage/html/*.pug")
		.pipe(
			pug({
				pretty: true,
			})
		)
		.pipe(gulp.dest("dist"));
});

//css task
gulp.task("css", function () {
	return gulp
		.src(["stage/css/**/*.css", "stage/css/**/*.scss"])
		.pipe(sourcemaps.init())
		.pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
		.pipe(autoprefixer())
		.pipe(concat("main.css"))
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest("dist/css"));
});

//js task
gulp.task("js", function () {
	return gulp
		.src("stage/js/*.js")
		.pipe(concat("main.js"))
		.pipe(minify())
		.pipe(gulp.dest("dist/js"));
});

//watch task
gulp.task("watch", function () {
	gulp.watch("stage/html/**/*.pug", gulp.parallel(["html"]));
	gulp.watch(
		["stage/css/**/*.css", "stage/css/**/*.scss"],
		gulp.parallel(["css"])
	);
	gulp.watch("stage/js/*.js", gulp.parallel(["js"]));
});

gulp.task("default", gulp.parallel(["watch"]));
