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
    if (this.hasDriversLicense) {
      return `has a driver's license.`;
    } else {
      return `doesn't have a driver's license.`;
    }
  },
};

console.log(vitoria.calcAge());

// Challenge

// "Vitoria is a 25-year old student, and she doesn't have a driver's license."

console.log(
  `${vitoria.firstName} is a ${vitoria.age}-year old ${
    vitoria.job
  }, and ${vitoria.driversLicense()}`
);

//   driversLicense: function () {
//     this.hasDriversLicense = false;
//     return `${this.firstName} doesn't have a driver's license.`;
//   },
