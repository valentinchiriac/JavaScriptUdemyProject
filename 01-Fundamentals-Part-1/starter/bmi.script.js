let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);

console.log("Mark's BMI is " + BMIMark);
console.log("John's BMI is " + BMIJohn);

let markHigherBMI = BMIMark > BMIJohn;
console.log(
  "First case: Is Mark's BMI higher than John's BMI? " + markHigherBMI,
);

massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;

console.log("Mark's BMI is " + BMIMark);
console.log("John's BMI is " + BMIJohn);

markHigherBMI = BMIMark > BMIJohn;
console.log(
  "Second case: Is Mark's BMI higher than John's BMI? " + markHigherBMI,
);

if (markHigherBMI) {
  console.log(
    "Mark's BMI (" + BMIMark + ") is higher than John's (" + BMIJohn + ")!",
  );
} else {
  console.log(
    "John's BMI (" + BMIJohn + ") is higher than Mark's (" + BMIMark + ")!",
  );
}

if (markHigherBMI) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}
