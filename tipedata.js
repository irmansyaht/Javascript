function TipeData() {
  var data = '0zon';
  console.log(typeof(data));
  if (typeof(data) == 'string') {
    return data;
  }
  else {
    return 'gagal';
  }
}
console.log(TipeData());
//TipeData()
