//Write a function that will multiply number until the number becomes a single digit

function persistence(num) {
  let i = 0;

  while (num.toString().length !== 1) {
    num = Array.from(String(num), Number).reduce((q, t) => q * t);
    i++;
  }
  console.log(num.toString().length);

  return i;
}

console.log(persistence(39));
