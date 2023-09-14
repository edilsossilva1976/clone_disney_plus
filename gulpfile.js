const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const sass = require("gulp-sass")(require("sass"));

function styles(){
    return gulp.src('./src/styles/*.sass') //recuperar os arquivos
        .pipe(sass({outputStyle: 'compressed'})) //compressão de arquivos
        .pipe(gulp.dest('./dist/css')); //envio dos arquivos comprimidos
}

function images(){
    return gulp.src('./src/images/**/*') //recuperar os arquivos
        .pipe(imagemin()) //compressão de arquivos
        .pipe(gulp.dest('./dist/images')); //envio dos arquivos comprimidos
}


exports.default = gulp.parallel(styles, images);
exports.watch = function(){
    gulp.watch('./src/styles/*.sass', gulp.parallel(styles))
};