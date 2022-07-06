const { createFile } = require("./helpers/multiplicar");
const argv = require("./config/yargs");

console.clear();

createFile(argv.b, argv.m, argv.l)
  .then((fileName) => console.log(fileName + " creado correctamente!".green))
  .catch((err) => console.log(err));
