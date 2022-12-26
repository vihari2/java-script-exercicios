//dot vs bracket notation

const vitoria = {
  firstName: "Vitoria",
  lastName: "Silva",
  Age: 2022 - 1997,
  job: "student",
  friends: ["Maria", "Marco", "Alexander"],
};

console.log(vitoria);
console.log(vitoria.lastName); //dot notation
console.log(vitoria["lastName"]); //u cant use operations because its a expression inside []
console.log(vitoria["first" + "Name"]);

vitoria.location = "Brasil";
vitoria["twitter"] = "@vitoria";
console.log(vitoria);

const interestedIn = prompt(
  "What do you want to know about Vitoria? Choose between firstName, lastName, Age, job, and friends"
);

if (vitoria[interestedIn]) {
  console.log(vitoria[interestedIn]);
} else {
  console.log("Wrong request!");
}

console.log(
  `${vitoria.firstName} has ${vitoria.friends.length} friends and her best friends is called ${vitoria.friends[0]}`
);
