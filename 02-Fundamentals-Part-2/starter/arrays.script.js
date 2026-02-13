//declararea unui Array
const friends = ["Cristina", "George", "Bulichi"];
const years = new Array(1991, 2001, 2026, 2035);

//accesarea elementelor din array
console.log(friends[2]);
console.log(years[0]);

//lungimea unui array
console.log(friends.length);

//accesarea ultimului element din array
console.log(years[years.length - 1]);

//replacing values in the array
friends[2] = "Ion";
console.log(friends);

//array can hold different types of data
const firstName = "Valentin";

//creating an array with different types of data
const valentinData = `The data requested is ${[firstName, 2026 - 1980, friends, years.length - 1]}`;

const Valentin = [firstName, 2026 - 1980, friends, years.length - 1];
console.log(Valentin);
console.log(valentinData);

//exercise about calculating ages from birth years
const calcAge = function (birthYear) {
  return 2026 - birthYear;
};
const yearOfBirth = [1946, 1951, 1969, 1978, 1980, 2005, 2009];

console.log(calcAge(yearOfBirth[0]));
console.log(calcAge(yearOfBirth[2]));
console.log(calcAge(yearOfBirth[yearOfBirth.length - 1]));

const arrayOfYears = [
  calcAge(yearOfBirth[0]),
  calcAge(yearOfBirth[2]),
  calcAge(yearOfBirth[yearOfBirth.length - 1]),
];

console.log(arrayOfYears);

//array methods
//add an element to an array
const friendsTwo = ["Mickael", "Jordan", "John"];
console.log(friendsTwo);
friendsTwo.push("Bulichi");
console.log(friendsTwo);

//delete the last element of the array
friendsTwo.pop();
console.log(friendsTwo);

//add at the begining of array
friendsTwo.unshift("Klaus");
console.log(friendsTwo);

//position of an argument in the array
console.log(friendsTwo.indexOf("Jordan"));

//ask if an element is in the array
console.log(friendsTwo.includes("John"));
console.log(friendsTwo.includes("Ion"));

if (friendsTwo.includes("John")) {
  console.log(`You have a friend called John`);
}
