//Write a function that will remove vowels
function removeVowels(str) {
  const arr = [];

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] !== "o" &&
      str[i] !== "a" &&
      str[i] !== "e" &&
      str[i] !== "i" &&
      str[i] !== "u"
    ) {
      arr.push(str[i]);
    }
  }
  return arr;
}

// console.log(removeVowels("codewars"));
