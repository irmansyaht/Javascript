function jalanSatu() {
  var nilai = 1; //variable
  if (nilai == 3 )
  { //menjalankan kondisi benar
        console.log("Benar");
  }
  else if (nilai == 2) {
    //menjalankan kondisi salah tetapi benar pada kondisi berikutnya
    console.log("Hampir Benar");
  }
  else
  { //menjalankan kondisi salah
    console.log("Salah");
  }
  //contoh penulisan one liner if else condition
if(nilai ==1) console.log("OK");
else console.log("Bukan");
}

jalanSatu();
