const fs = require("fs");

const Data = `tulis apa aja disini terserah
ini hanya contoh`;

fs.writeFile("log.txt", Data, (err) => {
  if (err) {
    console.error("Terjadi kesalahan saat menulis file :", err);
    return;
  }
  console.log("File berhasil ditulis.");
});

fs.readFile("log.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Terjadi kesalahan saat membaca file :", err);
    return;
  }
  console.log(data);
});
