var gulp    = require('gulp'),
    sass    = require('gulp-sass');
    clean_css = require("gulp-clean-css");
    rename = require("gulp-rename");
var paths = {
  styles: {
    src: 'scss/**/*.scss',
    dest: 'css'
  }
};

function styles() {
  return gulp
    .src(paths.styles.src, {
      sourcemaps: true
    })
    .pipe(sass())
    // .pipe(clean_css())
    //     .pipe(
    //         rename({

    //             extname:".min.css"
    //         })
    //     )
    .pipe(gulp.dest(paths.styles.dest));
}

function watch() {
  gulp.watch(paths.styles.src, styles);
}

var build = gulp.parallel(styles, watch);

gulp.task(build);
gulp.task('default', build);