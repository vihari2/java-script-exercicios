// function declaration
function calAge(birthYear) {
  const age = 2022 - birthYear;
  return age;
}

const age = calAge(1997);
console.log(age);

// function expression
//armazenando uma função em uma variável, e a variável é uma função.
// função sem nome, é uma função anônima.
const personage = function (birthYear) {
  return 2022 - birthYear;
};
//or const personage = function (birthYear) {
//     const age1 = 2022 - birthYear;
// return age1
// }
const age1 = personage(1997);
console.log(age1);

// funções de expressão não é um tipo, uma string ou um número, mas sim um valor, se é um valor pode ser armazendo em uma váriavel.
