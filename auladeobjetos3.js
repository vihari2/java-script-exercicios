//objects methods

// em um objeto pode conter diversos tipo diferentes de dados, até mesmo um array e um objeto dentro de outro objeto.

//função é apenas um tipo de valor
//podemos adicionar funções a objetos

const vitoria = {
  firstName: "Vitoria",
  lastName: "Silva",
  birthYear: 1997,
  job: "student",
  friends: ["Maria", "Marco", "Alexander"],
  hasDriversLicense: false,

  calcAge: function () {
    console.log(this); //this faz referência ao objeto que o método está sendo chamado
    return 2022 - this.birthYear; //valor da função que está dentro do objeto
  },

  // calcAge: function (birthYear) {
  //   return 2022 - birthYear; //valor de função
  // },
  //quando a função está dentro de um objeto, ela é chamada de método.
};
console.log(vitoria.calcAge());

// //its different because the first is a property of the object
// const calcAge = function (birthYear) {
//   return 2022 - birthYear;
// };

vitoria.calcAge(1997); //chamando a função dentro do objeto
console.log(vitoria.calcAge(1997));
console.log(vitoria["calcAge"](1997));
