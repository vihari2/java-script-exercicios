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
  driversLicense: function () {
    this.hasDriversLicense = false;
    return `${this.firstName} doesn't have a driver's license.`;
  },
};

console.log(vitoria.calcAge());
console.log(vitoria.age);
console.log(vitoria.age);
console.log(vitoria.age);
console.log(vitoria.age);

// Challenge

// "Vitoria is a 25-year old student, and she doesn't have a driver's license."

console.log(
  `${vitoria.firstName} is a ${vitoria.age}-year old ${
    vitoria.job
  }, and ${vitoria.driversLicense()}`
);
