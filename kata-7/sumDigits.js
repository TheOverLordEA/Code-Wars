//Write a function that will return the absolute value of a number

function sumDigits(number) {
  const array = number.toString().split("");

  if (array[0] === "-") {
    const addMinus = array.slice(0, 2);

    const newItem = [addMinus[0] + addMinus[1]];
    console.log(newItem);
    const item = array.slice(2);
    console.log(newItem.concat(item));
    return Math.abs(
      newItem
        .concat(item)
        .map((el) => Number(el))
        .reduce((a, e) => a - e)
    );
  } else {
    return Math.abs(
      array.map((e) => Number(e)).reduce((total, items) => total + items, 0)
    );
  }
}

console.log(sumDigits(-32));
