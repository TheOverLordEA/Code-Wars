//Create a function to display the age in a string

function howOldYouAre(age) {
  return Number(age.split(" ")[0]);
}

console.log(howOldYouAre("10 old"));
