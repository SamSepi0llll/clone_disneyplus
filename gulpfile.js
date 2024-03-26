const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function styles(){
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
            .pipe(gulp.dest('./dist/css'))
}


function testeGulp(cb){
    console.log('teste')
    cb()
}

exports.default = styles
exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}
