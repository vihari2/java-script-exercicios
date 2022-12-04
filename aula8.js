// logical operators

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const hasDriversLicense2 = false; // A
const hasGoodVision2 = true; // B

console.log(hasDriversLicense2 && hasGoodVision2);

const isTired = false; // C
console.log(hasDriversLicense2 && hasGoodVision2 && isTired);

if (hasDriversLicense2 && hasGoodVision2 && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}
