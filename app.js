const { createFile } = require("./helpers/multiplicar");

console.clear();

const base = 5;

createFile(base)
  .then((fileName) => console.log(fileName + " creado correctamente!"))
  .catch((err) => console.log(err));
