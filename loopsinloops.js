//looping backwards
const vitoriaArray = [
  "Vitoria",
  "Freitas",
  1997,
  "student",
  ["Lucas", "Bruna", "Camila"],
];

//4-3-2-1-0

for (let i = vitoriaArray.length - 1; i >= 0; i--) {
  console.log(vitoriaArray[i]);
}

//loop inside of the loop

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`--------------Starting exercise ${exercise}`);
}
