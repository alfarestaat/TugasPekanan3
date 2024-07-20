var prompt = require('prompt-sync')();
let x = prompt("Masukkan angka: ");

if (x < 0) {
  console.log("Tidak bisa input bilangan negatif");
} else if (x % 2 !== 0) {
  console.log("Tidak bisa input bilangan ganjil");
} else {
  console.log("Hasil akar pangkat 2 dari", x,"adalah",Math.sqrt(x));
}