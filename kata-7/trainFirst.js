//Create a function that will return the decimal point of a int to string

function seriesSum(int) {
  let result = 0;
  let reverage = 1;
  for (let i = 0; i < int; i += 1) {
    if (i === 0) {
      result = 1;
    } else {
      reverage += 3;
      result = result + 1 / reverage;
    }
  }
  return Number(result.toFixed(2));
}

console.log(seriesSum(2));
