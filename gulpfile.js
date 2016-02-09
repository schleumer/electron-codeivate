const path = require('path');
const gulp = require('gulp');
const babel = require('gulp-babel');
const changed = require('gulp-changed');
const watch = require('gulp-watch');
const plumber = require('gulp-plumber');
const less = require('gulp-less');

const babelConfig = {
  "plugins": [
    "transform-class-properties"
  ],
  "presets": [
    "es2015",
    "stage-0",
    "react",
    "es2015-loose"
  ]
};

const end = () => ({
        errorHandler: function (err) {
            console.log(err);
            this.emit('end');
        }
    });

gulp.task('babel', () => {
  return gulp.src('./src/javascript/**/*.js')
    .pipe(plumber())
    .pipe(changed('./dist/javascript'))
    .pipe(babel(babelConfig))
    .pipe(gulp.dest('./dist/javascript'));
});

gulp.task('dev-less', () => {
  return gulp.src('./src/less/app.less')
    .pipe(plumber(end()))
    .pipe(less({
      paths: [ path.join(__dirname, 'node_modules') ]
    }))
    .pipe(gulp.dest('./dist/css/'))
});

gulp.task('watch-javascript', ['babel'], () => {
  return watch('./src/javascript/**/*.js', () => {
    gulp.start("babel");
  });
});

gulp.task('watch-less', ['dev-less'], () => {
  return watch(['src/less/**/*.less'], () => {
    gulp.start("dev-less");
  });
});


gulp.task('default', [
  'babel',
  'dev-less',
  'watch-javascript',
  'watch-less'
]);