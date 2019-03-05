function panggilPopA() {
  var kota = ['jakarta','depok','bekasi','tanggerang','seribu'];
  console.log(kota);
  console.log("==========");
  kota.pop(); //membuang data paling belakang
  return kota;
}

console.log(panggilPopA());
