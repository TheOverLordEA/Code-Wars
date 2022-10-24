//Write a function that will return the index of all the capital letters in orderd list

function capital(word) {
  let a = [];

  for (let i = 0; i < word.length; i++) {
    console.log(word[i]);

    if (word[i] === word[i].toUpperCase()) {
      console.log(i);
      a.push(i);
    }
  }
  return a;
}
console.log(capital("CodEWaRs"));
