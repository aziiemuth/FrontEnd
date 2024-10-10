// Fungsi dengan parameter wajib, opsional, dan sisa
function demonstrasiParameter(wajib, opsional = "default", ...sisa) {
    console.log("Parameter wajib:", wajib);
    console.log("Parameter opsional:", opsional);
    console.log("Parameter sisa:", sisa);
  }
  
  // Fungsi callback
  function fungsiCallback(data) {
    console.log("Fungsi callback dipanggil dengan data:", data);
  }
  
  // Fungsi menggunakan semua jenis parameter
  function fungsiKompleks(wajib, opsional = "default", callback, ...sisa) {
    console.log("Parameter wajib:", wajib);
    console.log("Parameter opsional:", opsional);
    console.log("Parameter sisa:", sisa);
    
    // Memanggil fungsi callback
    callback("Beberapa data");
  }
  
  // Penggunaan
  demonstrasiParameter("Nilai wajib", "Opsional kustom", 1, 2, 3);
  fungsiKompleks("Wajib", undefined, fungsiCallback, "ekstra1", "ekstra2");