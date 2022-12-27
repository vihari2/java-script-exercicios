const vitoria = {
  firstName: "Vitoria",
  lastName: "Silva",
  birthYear: 1997,
  job: "student",
  friends: ["Maria", "Marco", "Alexander"],
  hasDriversLicense: false,

  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },
};

console.log(vitoria.calcAge());
console.log(vitoria.age);
console.log(vitoria.age);
console.log(vitoria.age);
console.log(vitoria.age);
