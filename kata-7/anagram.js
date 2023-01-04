//Create a function that will

function solution(test, first) {
  const sortedFirst = first.toLowerCase().split("").sort().join("");

  const sortedTest = test.toLowerCase().split("").sort().join("");

  console.log(sortedFirst, sortedTest);

  return sortedFirst === sortedTest;
}

console.log(solution("Buckethead", "DeathCubeK"));
