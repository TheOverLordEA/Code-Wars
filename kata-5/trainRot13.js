//Create a function that shifts a english letter 13 letters after

const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const reverseAlpha = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";

function deCrypt(word) {
  let wordInt = [];
  let alphaReverse = [];
  for (let i = 0; i < word.length; i++) {
    for (let w = 0; w < alpha.length; w++) {
      if (word[i] === alpha[w]) {
        wordInt.push(w);
      }
    }
  }

  for (let i = 0; i < wordInt.length; i++) {
    for (let u = 0; u < reverseAlpha.length; u++) {
      if (wordInt[i] === u) {
        alphaReverse.push(reverseAlpha[u]);
        console.log(reverseAlpha[u]);
      }
    }
  }
  return alphaReverse.join("");
}

// console.log(deCrypt("tesT"));
