const fs = require("fs");

const createFile = async (base = 5) => {
  try {
    let output = "";

    console.log("===================");
    console.log(`   Tabla del ${base}:  `);
    console.log("===================");

    for (let i = 1; i <= 10; i++) {
      output += `${base} x ${i} = ${base * i}\n`;
    }

    console.log(output);

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
