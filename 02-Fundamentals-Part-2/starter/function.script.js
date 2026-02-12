"use strict";

let hasDriversLicence = false;
const passedTest = true;

if (passedTest) hasDriversLicence = true;
if (hasDriversLicence) console.log("I can drive!");

//functions are piecesof code that get executed when calld
function namingMe() {
  console.log("my name is Valentin");
}

// running, calling or invocking te function
namingMe();
namingMe();
namingMe();

function juiceMaker(apples, oranges, bananas) {
  console.log(apples, oranges, bananas);
  const juice = `Made juice with ${apples} apples, ${oranges} oranges and ${bananas} bananas.`;
  return juice;
}

let tuttiFrutiJuice = juiceMaker(2, 3, 4);
console.log(tuttiFrutiJuice);

const appleJuice = juiceMaker(5, 0, 0);
console.log(appleJuice);

let powerJuice = juiceMaker(2, 0, 4);
console.log(powerJuice);

function tripPlanner(baggages, guests, sights) {
  const plan = `We will organise this trip having ${baggages} baggages, inviting ${guests} guests and seeing ${sights} sights in the next week.`;
  return plan;
}
let tripToAlps = tripPlanner(3, 2, 6);
console.log(tripToAlps);

let tripToSpain = tripPlanner(7, 5, 5);
console.log(tripToSpain);

function addProtein(monday, tuesday, wednesday) {
  const protein = monday + tuesday + wednesday;
  return protein;
}

let firstWeek = addProtein(24, 45, 51);
console.log(`First week's protein intake was ${firstWeek} grams.`);

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let num = 3;
console.log(`The number ${num} is even: ${isEven(num)}`);

//check if the number is positive or negative
function checkNumber(number) {
  if (number > 0) {
    return "positive";
  } else if (number < 0) {
    return "negative";
  } else {
    return "zero";
  }
}

let number = -1234;
console.log(checkNumber(number));

//calculating birth year

//Function declaration
function calAge1(birthYear) {
  return 2026 - birthYear;
}
const age1 = calAge1(1980);

//function expression
const calcAge2 = function (birthYear) {
  return 2027 - birthYear;
};

const age2 = calcAge2(1980);
console.log(age1, age2);

//arrow function
const calcAge3 = (birthYear) => 2026 - birthYear;
const age3 = calcAge3(1980);
console.log(age3);

//calculate years until retirement
const yearsUntilRetirement = (birthYear) => {
  const age = 2026 - birthYear;
  const retirement = 65 - age;
  return retirement;
};
console.log(yearsUntilRetirement(1980));
