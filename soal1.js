const persegi = require("./bangun_datar/persegi");
const persegi_panjang = require("./bangun_datar/persegi_panjang");

const sisi = 5;
const panjang = 10;
const lebar = 6;

console.log("Luas Persegi :", persegi.luas(sisi));
console.log("Keliling Persegi :", persegi.keliling(sisi));

console.log("Luas Persegi Panjang :", persegi_panjang.luas(panjang, lebar));
console.log(
  "Keliling Persegi Panjang :",
  persegi_panjang.keliling(panjang, lebar)
);
