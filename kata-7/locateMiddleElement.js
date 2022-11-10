//Write a function that will return the index of the number between a triplet

function locateMiddleElement(array) {
  const sortArray = array.map((el) => el).sort((a, b) => a - b)[1];

  return array.indexOf(sortArray);
}

console.log(locateMiddleElement([2, 3, 1]));
