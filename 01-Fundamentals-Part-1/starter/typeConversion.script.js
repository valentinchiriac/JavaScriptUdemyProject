//type conversion
const inputYear = "1991";
//asta va concatena numarul ca string si un alt numar
console.log(inputYear + 19);

// converting a string to a number
console.log(Number(inputYear) + 19);

//converting a number to a string
console.log(String(1991));

//type coertion
console.log("23" + 21); //converted to string > 2321
console.log("23" - 21); //converted to numbers > 2
console.log("23" * 2); //converted to numbers > 46

//equality

const age = 18;
if (age === 18) console.log("you just became an adult! > strict equality");
if (age == 18) console.log("you just became an adult! > loose equality");
//if ((age = 18)) console.log("you just became an adult! > uncaught TypeError");

const favourite = Number(prompt("what is your favourite number?"));
console.log(favourite);

if (favourite === 23) {
  console.log("Cool! 23 is a good number");
} else if (favourite === 9) {
  console.log("9 is also good");
} else if (favourite === 65) {
  console.log("65 is also a good choice");
} else {
  console.log("Number chosen is not 23, 9 or 65");
}

if (favourite !== 23) console.log("Why not 23?");
