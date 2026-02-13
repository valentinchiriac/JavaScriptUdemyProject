"use strict";

// //arrow function
// const calcAge3 = (birthYear) => 2026 - birthYear;
// const age3 = calcAge3(1980);
// console.log(age3);

// //calculate years until retirement
// const yearsUntilRetirement = (birthYear) => {
//   const age = 2026 - birthYear;
//   const retirement = 65 - age;
//   return retirement;
// };

// //example from history
// let scoreDolphinsH = (96 + 108 + 89) / 3;
// let scoreKoalasH = (88 + 91 + 110) / 3;

// if (scoreDolphinsH > scoreKoalasH) {
//   console.log("Dolphins win the trophy");
// } else if (scoreKoalasH > scoreDolphinsH) {
//   console.log("Koalas win the trophy");
// } else {
//   console.log("Both win the trophy");
// }

const calcAverage = (a, b, c) => {
  return (a + b + c) / 3;
};
console.log(calcAverage(44, 23, 71));

var scoreDolphins = calcAverage(85, 54, 41);
var scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};
checkWinner(scoreDolphins, scoreKoalas);
