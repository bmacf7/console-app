const argv = require("yargs")
  .option("b", {
    alias: "base",
    demandOption: true,
    describe: "Base para la multiplicación",
    type: "number",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base debe ser un número!".red;
    } else {
      return true;
    }
  })
  .option("l", {
    alias: "limite",
    default: false,
    describe: "Valor limite de calculo de la tabla",
    type: "number",
  })
  .check((argv, options) => {
    if (isNaN(argv.l)) {
      throw "El limite debe ser un número!".red;
    } else {
      return true;
    }
  })
  .option("m", {
    alias: "mostrar",
    default: false,
    describe: "Mostrar en pantalla el resultado",
    type: "boolean",
  }).argv;

module.exports = argv;
