let typeSel = prompt('To convert decimal to binary type "0" else type "1"');
if (typeSel === "0") {
  let deNum = Number(prompt("enter the decimal number you want to convert"));
  let arr = [];
  while (deNum !== 0) {
    arr.push(Math.trunc(deNum % 2));
    deNum = Math.trunc(deNum / 2);
  }
  alert0(`your binary number is 0${arr.reverse().join("")}`);
} else {
  let biNum = prompt("enter the binary number you want to convert")
    .split("")
    .reverse();
  let sum = 0;
  for (let [key, value] of biNum.entries()) {
    sum = sum + 2 ** key * value;
  }
  alert(`your decimal number is ${sum}`);
}
