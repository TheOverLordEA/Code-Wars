//Create a function that will print * depending on the number

function solution(number) {
  if (number % 2 === 0 || number < 0) {
    return null;
  } else {
    let mid = Math.ceil(number / 2);

    let string = "";
    for (let i = 0; i < number; i++) {
      string += "*".repeat(mid - i) + "\n";
    }

    return string;
  }
}

console.log(solution(5));
