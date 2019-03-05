function panggilSpliceA() {
var kota = ['jakarta','bekasi','depok','bogor','tanggerang','seribu'];
  console.log(kota)
  //kota.splice(2,0,'gunung putri'); //menyisipkan array
kota.splice(2,3,'cileungsi') //array sisipan, jumlah yang dihapus
return kota;
}
console.log(panggilSpliceA());
