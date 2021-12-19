const panggilKesukaanku = () => {
  let kesukaanku = {
    nama: "Adhi",
    umur: 34,
    kesukaan: {
      makanan: ["batagor", "bakso", "nasi campur"],
      minuman: ["es teh manis panas", "es campur", "soda anti sedih"],
    },
  };

  for (const x in kesukaanku) {
    console.log(kesukaanku[x], "\n");
  }

  // mengubah property minuman_kesukaan
  console.log("=================================================");
  console.log("Mengubah nilai property makanan dari kesukaan:");
  kesukaanku.kesukaan.minuman = [
    "es krim",
    "es teh manis panas",
    "es campur",
    "soda anti sedih",
  ];

  for (const y in kesukaanku) {
    console.log(kesukaanku[y], "\n");
  }

  // menambah property musik_kesukaan
  console.log("=================================================");
  console.log("Menambah property musik dari kesukaan:");
  kesukaanku.kesukaan.musik = [
    "dangdut koplo is the music of my heart",
    "jazz everywhere",
    "classical melody on my mind",
  ];

  for (const z in kesukaanku) {
    console.log(kesukaanku[z]);
  }
};

panggilKesukaanku();
