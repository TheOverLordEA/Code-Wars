//Write a function that will return a string in expanded form

function form(int) {
  let none = "";
  const stringInt = int.toString().split("").reverse("");

  let arr = [];
  for (let i = 0; i < stringInt.length; i++) {
    if (i === 0) {
      arr.push(stringInt[i]);
    } else {
      none += "0";
      arr.push(stringInt[i] + none);
    }
  }

  console.log(
    arr
      .filter((el) => el[0] !== "0")
      .reverse()
      .join(" + ")
  );
}

// console.log(form(70304));
