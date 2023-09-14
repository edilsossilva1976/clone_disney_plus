const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function styles(){
    return gulp.src('./src/styles/*.sass') //recuperar os arquivos
        .pipe(sass({outputStyle: 'compressed'})) //compressão de arquivos
        .pipe(gulp.dest('./dist/css')); //envio dos arquivos comprimidos
}





exports.default = styles;
exports.watch = function(){
    gulp.watch('./src/styles/*.sass', gulp.parallel(styles))
};