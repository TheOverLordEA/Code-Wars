//Create a function that will take a string and add the correct number

function oneTwo(str) {
  return str.map((el, i) => `${i + 1}: ${el}`);
}

// console.log(oneTwo(["a", "b"]));
