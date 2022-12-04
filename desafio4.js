// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement � (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”

let tip;
let bill = 300;

if (bill >= 50 && bill <= 300) {
  tip = bill * 0.15;
} else {
  tip = bill * 0.2;
}
console.log(
  `The bill was ${bill} dollars, the tip was ${tip} dollars, and the final value is ${
    bill + tip
  } dollars.`
);

// ternary operator
let bill2 = 275;
let tip2;
tip2 = bill2 >= 50 && bill2 <= 300 ? bill2 * 0.15 : bill2 * 0.2;
console.log(
  `The bill was ${bill2} dollars, the tip was ${tip2} dollars, and the final value is ${
    bill2 + tip2
  } dollars.`
);
