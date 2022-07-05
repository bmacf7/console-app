const argv = require("yargs")
  .option("b", {
    alias: "base",
    demandOption: true,
    describe: "Base para la multiplicación",
    type: "number",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base debe ser un número!";
    } else {
      return true;
    }
  })
  .option("l", {
    alias: "listar",
    default: false,
    describe: "Mostrar en pantalla el resultado",
    type: "boolean",
  }).argv;

module.exports = argv;
