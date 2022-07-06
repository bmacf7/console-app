const fs = require("fs");
const colors = require("colors");

const createFile = async (base = 5, mostrar, limite = 10) => {
  try {
    let output = "";

    for (let i = 1; i <= limite; i++) {
      output += `${base} x ${i} = ${base * i}\n`;
    }

    if (mostrar) {
      console.log("===================");
      console.log(`   Tabla del ${base}:  `);
      console.log("===================");
      console.log(output);
    }

    let fileName = `tabla-${base}.txt`;

    fs.writeFileSync(fileName, output);

    return fileName;
  } catch (err) {
    throw err.red;
  }
};

module.exports = {
  createFile,
};
