// métodos úteis de array

const friends = ["Jane", "Marta", "Carla", "Gabriela"];

//Add elementos

const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

//Remove elements
friends.pop(); //Last
friends.pop(); //
console.log(friends);

friends.shift(); //First
console.log(friends);

///array position

console.log(friends.indexOf("Carla"));
console.log(friends.indexOf("William"));

console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
