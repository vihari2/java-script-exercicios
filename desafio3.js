/*The Complete JavaScript Course 7
    Coding Challenge #3
    There are two gymnastics teams, Dolphins and Koalas. They compete against each
    other 3 times. The winner with the highest average score wins a trophy!
    Your tasks:
    1. Calculate the average score for each team, using the test data below
    2. Compare the team's average scores to determine the winner of the competition,
    and print it to the console. Don't forget that there can be a draw, so test for that
    as well (draw means they have the same average score)
    3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
    team only wins if it has a higher score than the other team, and the same time a
    score of at least 100 points. Hint: Use a logical operator to test for minimum
    score, as well as multiple else-if blocks 😉
    4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
    both teams have the same score and both have a score greater or equal 100
    points. Otherwise, no team wins the trophy
    Test data:
    § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
    § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
    § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
    GOOD LUCK 😀*/

const dolphinsTeam = [96, 108, 89];
const koalasTeam = [88, 91, 110];

dolphinsScore = (dolphinsTeam[0] + dolphinsTeam[1] + dolphinsTeam[2]) / 3;
koalasScore = (koalasTeam[0] + koalasTeam[1] + koalasTeam[2]) / 3;

console.log("Dolphins score is", dolphinsScore);
console.log("Koalas score is", koalasScore);

if (dolphinsScore > koalasScore) {
  console.log("Dolphins wins!");
} else if (koalasScore > dolphinsScore) {
  console.log("Koalas wins!");
} else if (dolphinsScore === koalasScore) {
  console.log("It's a draw!");
}

//BONUS1//

const dolphinsTeam2 = [97, 122, 81];
const koalasTeam2 = [109, 95, 106];

dolphinsScore2 = (dolphinsTeam2[0] + dolphinsTeam2[1] + dolphinsTeam2[2]) / 3;
koalasScore2 = (koalasTeam2[0] + koalasTeam2[1] + koalasTeam2[2]) / 3;

console.log("Dolphins score is", dolphinsScore2);
console.log("Koalas score is", koalasScore2);

if (dolphinsScore2 > koalasScore2 && dolphinsScore2 >= 100) {
  console.log("Dolphins wins!");
} else if (koalasScore2 > dolphinsScore2 && koalasScore2 >= 100) {
  console.log("Koalas wins!");
} else if (
  dolphinsScore2 === koalasScore2 &&
  dolphinsScore2 >= 100 &&
  koalasScore2 >= 100
) {
  console.log("It's a draw!");
} else {
  console.log("No one wins the trophy");
}
