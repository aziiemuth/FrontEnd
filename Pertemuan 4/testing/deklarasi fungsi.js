// Fungsi Deklaratif
function fungsiDeklaratif(parameter) {
  console.log("Ini adalah fungsi deklaratif dengan parameter:", parameter);
}

// Fungsi Anonim
const fungsiAnonim = function(parameter) {
  console.log("Ini adalah fungsi anonim dengan parameter:", parameter);
};

// Fungsi Panah
const fungsiPanah = (parameter) => {
  console.log("Ini adalah fungsi panah dengan parameter:", parameter);
};

// Penggunaan
fungsiDeklaratif("Halo");
fungsiAnonim("Dunia");
fungsiPanah("!");