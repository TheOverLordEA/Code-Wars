//Create a function that add a string by k

function theLongestWord(arr, connectBy) {
  let a = [];

  if (arr.length === 0 || connectBy > arr.length || connectBy <= 0) {
    return "";
  }

  const addBy = connectBy - 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + addBy] !== undefined) {
      a.push(arr[i] + arr[i + addBy]);
    }
  }
  console.log(a);
  return a.sort((a, b) => a.length - b.length);
}

// console.log(theLongestWord(["a", "b", "eeee", "e", "e"], 15));
