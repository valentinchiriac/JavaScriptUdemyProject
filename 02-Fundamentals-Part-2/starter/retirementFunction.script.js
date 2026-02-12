"use strict";

const calculateAge = function (birthYear) {
  return 2026 - birthYear;
};

const yearsUntilRetirement = function (birthYear, name) {
  const age = calculateAge(birthYear);
  const yearsToRetirement = 65 - age;

  if (yearsToRetirement > 0) {
    console.log(`${name} retires in ${yearsToRetirement} years.`);
    return yearsToRetirement;
  } else {
    console.log(`${name} is already retired!`);
    return -9999;
  }
};

console.log(yearsUntilRetirement(1980, "Bulichi Gherghini"));
console.log(yearsUntilRetirement(1960, "Geo Panamea"));
