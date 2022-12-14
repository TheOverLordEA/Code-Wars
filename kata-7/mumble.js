//Create a function that will return a mumble of string

function accum(string) {
  const array = string.split("").map((el, i) => [el.repeat(i + 1)][0]);

  for (let i = 0; i < array.length; i++) {
    array[i] =
      array[i].charAt(0).toUpperCase() + array[i].substr(1).toLowerCase();
  }

  return array.join("-");
}
