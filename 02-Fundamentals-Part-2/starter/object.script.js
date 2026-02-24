const valentinArray = [
  "Valentin",
  "Chiriac",
  2026 - 1980,
  ["Cristina", "Ana", "Zada"],
];

const valentinObject = {
  firstName: "Valentin",
  lastName: "Chiriac",
  age: 2026 - 1980,
  family: ["Cristina", "Ana", "Zada"],
};

console.log(valentinObject);

const nameKey = "Name";
console.log(valentinObject["first" + nameKey]);
console.log(valentinObject["last" + nameKey]);

valentinObject.location = "Iasi";
valentinObject.sideGig = "Mountain Guide";

const interestedIn = prompt(
  "Ce vrei sa stii despre Valentin? Alege intre firstName, lastName, age, family, location or sideGig",
);
console.log(valentinObject[interestedIn]);

// valentinObject.location = "Iasi";
// valentinObject.sideGig = "Mountain Guide";

console.log(valentinObject);

//folosim un tamplate literal pentru a apela proprietati ale obiectului valentinObject
//mai jos se face o propozitie care ia valoarea proprietatii firstName adica valentin si lungimea arrayului family si apoi valoarea a 3-a din Array
console.log(
  `${valentinObject.firstName} are ${valentinObject.family.length} prieteni, si cel mai bun prieten este ${valentinObject.family[2]}.`,
);

//o functie poate la randul ei sa fie o proprietate in cadrul unui obiect
const valentinObjectSecond = {
  firstName: "Valentin",
  lastName: "Chiriac",
  age: 46,
  family: ["Cristina", "Ana", "Zada"],
  hasDriversLicence: true,
  calculatePushUps: function (age) {
    return age - 2;
  },
};
console.log(valentinObjectSecond);
console.log(valentinObjectSecond["calculatePushUps"](48));
