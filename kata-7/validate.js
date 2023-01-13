//Create a function that will validate a pin

function solution(str) {
  return /^(\d{4}|\d{6})$/.test(str);
}

console.log(solution("123 "));
