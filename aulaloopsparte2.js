const vitoriaArray = [
  "Vitoria",
  "Freitas",
  1997,
  "student",
  ["Lucas", "Bruna", "Camila"],
];

const types = [];
///variavel contador = i, é uma variavel que vai ser usada para contar quantas vezes o loop vai rodar.
for (let i = 0; i < vitoriaArray.length; i++) {
  console.log(vitoriaArray[i]);
  //filling types array
  types[i] = typeof vitoriaArray[i];
}

console.log(types);
