const gulp = require("gulp");
// const series = gulp.series;
const { series, parallel } = require("gulp");

const antes1 = (cb) => {
  console.log("Tarefa antes 1!");
  return cb();
};
const antes2 = (cb) => {
  console.log("Tarefa antes 2!");
  return cb();
};

function copiar(cb) {
  gulp
    .src(["pastaA/arquivo1.txt", "pastaA/arquivo2.txt"])
    // .pipe(imagePelaMetade())
    // .pipe(imageEmPretoEBranco())
    // .pipe(transformacaoA())
    // .pipe(transformacaoB())
    // .pipe(transformacaoC())
    .pipe(gulp.dest('pastaB'))
  console.log("Tarefa de copiar!");
  return cb();
}

const fim = (cb) => {
  console.log("Tarefa fim!");
  return cb();
};

//execução em serie
// module.exports.default = series(antes1, antes2, copiar, fim);

// paralelo dentro de serie
module.exports.default = series(parallel(antes1, antes2), copiar, fim);

// const gulp = require('gulp');

// gulp.task('default', (done) => {
//   console.log('Gulp está funcionando!');
//   done();
// });
