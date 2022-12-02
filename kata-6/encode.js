// Write a function converts every string to ')'  shows once more '('

function encodeString(str) {
  //Loop through string

  //Find the amount that character shows up

  return str
    .toLowerCase()
    .split("")
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
    })
    .join("");
}
console.log(encodeString("recede"));
