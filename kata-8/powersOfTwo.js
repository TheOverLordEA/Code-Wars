//The function should be able to find the powers of a non-negative number and return it in array

function findPowers(number) {
  let array = [];

  for (let i = 0; i <= number; i++) {
    array.push(Math.pow(2, i));
  }

  return array;
}

// console.log(findPowers(0));
