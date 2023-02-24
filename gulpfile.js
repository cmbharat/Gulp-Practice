const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const gulpMinify = require("gulp-minify");

gulp.task("style", () => {
  return gulp
    .src("scss/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest("css"));
});

gulp.task("watch", () => {
  return gulp.watch("scss/*.scss", (done) => {
    gulp.series(["style"])(done);
  });
});

gulp.task("minjs", () => {
  return gulp.src("js/*.js").pipe(gulpMinify()).pipe(gulp.dest("js"));
});
