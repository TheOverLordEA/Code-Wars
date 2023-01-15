//Create a function that will flatten array and sort based ascending order int

function arrayFlattenSort(arr) {
  return arr.flat().sort((a, b) => a - b);
}

console.log(arrayFlattenSort([[1, 3, 5], [100], [2, 4, 6]]));
