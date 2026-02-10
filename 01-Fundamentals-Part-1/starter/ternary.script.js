// ternary operator

const age = 20;
age >= 18
  ? console.log("I like to drink alcohol ")
  : console.log("I like climbing");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

const hour = 13;
console.log(`Now is the time for ${hour <= 16 ? "work" : "climbing"}`);

const temp = 91;
console.log(`I think I will get a ${temp >= 90 ? "shower" : "tea"}`);

//tip challenge
const billTwo = 100;
let tip = 0;
if (billTwo >= 50 && billTwo <= 300) {
  console.log((tip = (billTwo / 100) * 15));
} else {
  console.log((tip = (billTwo / 100) * 20));
}

//ternary operator challenge
const bill = 275;

tip = bill >= 50 && bill <= 300 ? (tip = bill * 0.15) : (tip = bill * 0.2);

console.log(
  `The bill was ${bill}, the tip was ${bill >= 50 && bill <= 300 ? (tip = bill * 0.15) : (tip = billTwo * 0.2)}, and the total value ${bill + tip}.`,
);
