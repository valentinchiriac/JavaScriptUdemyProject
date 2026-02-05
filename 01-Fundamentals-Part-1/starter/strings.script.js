const firstName = "Valentin";
const job = "Programmer";
const year = 2026;
const birthYear = 1980;

const newValentinString = `I'm ${firstName}, a ${year - birthYear} year old ${job}.`;
console.log(newValentinString);

const drivingAge = 18;
const ageSarah = 15;
let yearsToDriving = drivingAge - ageSarah;
if (ageSarah >= drivingAge) {
  console.log("Sarah is able to drive!");
} else {
  console.log(
    `Too young to drive. Sarah needs to wait another ${yearsToDriving} years.`,
  );
}

const anulNasterii = 2001;

let century = 20;
if (anulNasterii >= 2000) {
  century;
} else {
  century + 1;
}
console.log(century);
