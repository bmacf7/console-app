const fs = require("fs");

const createFile = async (base = 5, listar) => {
  try {
    let output = "";

    for (let i = 1; i <= 10; i++) {
      output += `${base} x ${i} = ${base * i}\n`;
    }

    if (listar) {
      console.log("===================");
      console.log(`   Tabla del ${base}:  `);
      console.log("===================");
      console.log(output);
    }

    let fileName = `tabla-${base}.txt`;

    fs.writeFileSync(fileName, output);

    return fileName;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createFile,
};
