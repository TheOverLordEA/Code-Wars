//Create a function that will return a string based on the state of the argument

function lights(light) {
  switch (light) {
    case "green":
      return "yellow";
      break;
    case "yellow":
      return "red";
      break;
    case "red":
      return "green";
      break;
  }
}
