const { createFile } = require("./helpers/multiplicar");
const argv = require("./config/yargs");

console.clear();

createFile(argv.b, argv.l)
  .then((fileName) => console.log(fileName + " creado correctamente!"))
  .catch((err) => console.log(err));
