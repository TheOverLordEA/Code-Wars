//Build a function that will check if arrayB is equal to arrayA sqaured

function compareArr(arrA, arrB) {
  if (arrA.length < 1 && arrB.length < 1) {
    return true;
  }

  if (
    !Array.isArray(arrA) ||
    arrA.length < 1 ||
    !Array.isArray(arrB) ||
    arrB.length < 1
  ) {
    return false;
  }

  const sortedArrA = arrA.map((el) => el ** 2).sort((a, b) => a - b);

  const sortedArrB = arrB.map((el) => el).sort((a, b) => a - b);

  return sortedArrA.every((val, index) => val === sortedArrB[index]);
}

console.log(compareArr([121, 14641, 20736, 361, 25921, 361, 20736, 361], {}));
