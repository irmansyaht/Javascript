//perulangan menggunakan for
function panggilPerulanganFor() {
  var dataKota = ['Jakarta','Depok','Bogor','Bekasi'];
  for (var i = 0; i <dataKota.length; i++){
      console.log(dataKota[i]);
      console.log(i);
      console.log(dataKota);
  }
}
//perulangan menggunakan for each
function panggilPerulanganForEach() {
  var dataKota = ['Jakarta','Depok','Bogor','Bekasi'];
  dataKota.forEach(function (item,index,array) {
    console.log(item);
    console.log(index);
    console.log(array);
  });
}
//perulangan menggunakan MAP
function panggilPerulanganMap() {
  var dataKota = ['Jakarta','Depok','Bogor','Bekasi'];
  dataKota.map((item,index,array) => {
    console.log(item);
    console.log(index);
    console.log(array);
  });
}

panggilPerulanganFor();
panggilPerulanganForEach();
panggilPerulanganMap();
