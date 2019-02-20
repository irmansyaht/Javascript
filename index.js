var message = "Hello Coding"; // variable dapat diubah sesuai kondisi
let msg1 = "Hallo"; // let merupakan nilai yang dapat diubah
const msg2 = "Coding"; // tidak dapat diubah

//message = "Test 1 2 3"; //ubah nilai var
//msg1 = "Aku tak tahu"; //ubah nilai let
//msg2="Tidak tahu"; //jika di uncomment akan menyebabkan error

if (true)
{
  var message = 1;//global variable
  let msg1 = 2; //local variable
  console.log(msg1);
}
console.log(message);
console.log(msg1);
