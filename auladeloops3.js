const years = [1990, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2022 - years[i]);
}
console.log(ages);

//The push() method adds new items to the end of an array. The push() method changes the length of the array.
