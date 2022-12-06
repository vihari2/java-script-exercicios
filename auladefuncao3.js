// Função de seta (arrow function) =>
//forma especial de função de expressão.
//não precisa de chaves, nem de return, nem de parenteses.

const agePerson = (birthYear) => 2022 - birthYear;

const age = agePerson(1997);
console.log(age);

// const yearsUntilRetirement = (birthYear) => {
//   const age = 2022 - birthYear;
//   const retirement = 65 - age;
//   return retirement;
// };

// yearsUntilRetirement(1997);
// console.log(yearsUntilRetirement(1997));

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  return `${firstName} has ${age} years old and retires in ${retirement} years.`;
};

yearsUntilRetirement(1997, "Lucas");
console.log(yearsUntilRetirement(1997, "Lucas"));
