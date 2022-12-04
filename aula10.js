const age = 23;
age >= 18
  ? console.log("I like to drink wine")
  : console.log("I like to drink water");
// // o que está antes do ? é a condição, o que está depois do ? é o que vai acontecer se a condição for verdadeira, o que está depois do : é o que vai acontecer se a condição for falsa.

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);

//operação ternária é uma expressão, então pode ser usada dentro de outras expressões.
