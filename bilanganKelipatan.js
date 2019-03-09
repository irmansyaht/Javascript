function panggilKelipatan() {
  var bilanganKelipatan = []
  var kelipatan = 5 //ganti bilangan dengan panggilKelipatan
  for (var i = 1; i < 50; i++) {
    if (i%kelipatan === 0) {
      bilanganKelipatan.push(i)
    }
  }
  return bilanganKelipatan;
  }
    console.log(panggilKelipatan());
