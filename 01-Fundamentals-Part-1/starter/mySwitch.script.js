const day = "thursday";

switch (day) {
  case "monday":
    console.log("max pulls");
    break;
  case "tuesday":
    console.log("max hangs");
    break;
  case "wednesday":
    console.log("circuits 30");
    break;
  case "thursday":
    console.log("boulder");
    break;
  case "friday":
    console.log("stretching");
    break;
  case "saturday":
    console.log("running");
    break;
  case "sunday":
    console.log("chill");
    break;
  default:
    console.log("not in your program");
}

const dayTwo = "saturday";

if (dayTwo === "monday") {
  console.log("max pulls");
} else if (dayTwo === "tuesday") {
  console.log("squats");
} else if (dayTwo === "wednesday") {
  console.log("push-ups");
} else if (dayTwo === "thursday") {
  console.log("psaaat");
} else if (dayTwo === "friday") {
  console.log("groove gym");
} else {
  console.log("it's probably an Off day");
}
