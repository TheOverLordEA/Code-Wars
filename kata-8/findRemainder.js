//Create a function that will find the remainder of the int

function solution(e, u) {
  const array = [e, u].sort((a, b) => a - b);
  return array[1] % array[0];
}
