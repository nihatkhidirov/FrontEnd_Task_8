const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
console.log(input1);
const toplama = document.getElementById("Toplama");
toplama.addEventListener("click", function (number1, number2) {
  input1 = number1;
  input2 = number2;
  let toplam = input1 + input2;
});
