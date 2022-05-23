const gulp = require("gulp");
const browserSync = require("browser-sync").create();

gulp.task("browser-sync", function () {
  browserSync.init({
    server: {
      baseDir: "./",
    },
    port: 2000,
  });

  gulp.watch("./*.html").on("change", browserSync.reload);
  gulp.watch("./css/*.css").on("change", browserSync.reload);
  gulp.watch("./js/app.js").on("change", browserSync.reload);
});

gulp.task("default", gulp.series("browser-sync"));
