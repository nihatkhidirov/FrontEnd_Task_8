document.addEventListener("DOMContentLoaded", () => {
  const input1 = document.getElementById("input1");
  const input2 = document.getElementById("input2");
  const result = document.getElementById("result");

  document.getElementById("Toplama").addEventListener("click", () => {
    result.value = Number(input1.value) + Number(input2.value);
  });

  document.getElementById("Cixma").addEventListener("click", () => {
    result.value = Number(input1.value) - Number(input2.value);
  });

  document.getElementById("Bolme").addEventListener("click", () => {
    result.value = Number(input1.value) / Number(input2.value);
  });

  document.getElementById("Vurma").addEventListener("click", () => {
    result.value = Number(input1.value) * Number(input2.value);
  });
});
