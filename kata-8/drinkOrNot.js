//Create a function that outputs a string depending on the the age

function drinkAvaliable(age) {
  if (age < 14) {
    return "drink toddy";
  } else if (age < 18) {
    return "drink coke";
  } else if (age < 20) {
    return "drink beer";
  } else {
    return "drink whisky";
  }
}
