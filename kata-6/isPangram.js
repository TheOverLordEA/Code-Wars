//Write a function that will determine if argument is a pangram

function isPangram(string) {
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function (x) {
    return string.indexOf(x) !== -1;
  });
}

// console.log(
//   isPangram(
//     "A pangram is a sentence that contains every single letter of the alphabet at least once."
//   )
// );
