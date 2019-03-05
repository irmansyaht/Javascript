function panggilShiftA() {
  var kota = ['jakarta','depok','bekasi','tanggerang','seribu'];
  console.log(kota);
  console.log("==========");
//  kota = kota.shift(); //isi kota menjadi nilai yang di shift kiri pada array
var kota2 = kota.shift()//menghapus data paling depan
console.log(kota2)
  return kota; //variable kota akan dihapus menggunakan shift
}
console.log(panggilShiftA()); //return tampil karena console.log
//panggilShiftA(); //tidak ada tampilan return karena tidak menggunakan console.log
