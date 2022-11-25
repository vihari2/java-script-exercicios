const age = 8;
const isOldEnough = age >= 18;

//se for true, o bloco é executado.
if (isOldEnough) {
  console.log("Sarah can start driving license");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}

const birthYear = 1991;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
// else é opcional, mas se for usado, deve vir depois do if.
