const base = 5;
let output = "";

console.clear();
console.log("===================");
console.log(`   Tabla del ${base}:  `);
console.log("===================");

for (let i = 1; i <= 10; i++) {
  output += `${base} x ${i} = ${base * i}\n`;
}

console.log(output);
