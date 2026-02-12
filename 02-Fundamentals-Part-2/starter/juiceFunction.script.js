"use strict";

//this is a function inside another function

function fruitSlicer(slices) {
  return slices * 4;
}

function juiceMaker(apples, oranges, bananas) {
  const appleSlices = fruitSlicer(apples);
  const orangeSlices = fruitSlicer(oranges);
  const bananaSlices = fruitSlicer(bananas);

  //   console.log(apples, oranges, bananas);
  const juice = `Made juice with ${appleSlices} pieces of apple, ${orangeSlices} pieces of orange and ${bananaSlices} pieces of banana.`;
  return juice;
}

console.log(juiceMaker(1, 2, 3));

//another one
function baggagePlanner(parts) {
  return parts * 2;
}
function tripPlanner(baggages, guests, sights) {
  const baggageParts = baggagePlanner(baggages);
  const sightStops = baggagePlanner(sights);
  const plan = `We will organise this trip having ${baggageParts} baggages parts, inviting ${guests} guests and seeing ${sightStops} sight stops in the next week.`;
  return plan;
}
let tripToAlps = tripPlanner(3, 2, 6);
console.log(tripToAlps);
