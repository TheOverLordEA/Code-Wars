//Create a function that counts the amount of smiles in a array

function countSmiles(e) {
  //Create cariable to for counter

  //Loop array
  //If statement
  //Else
  let countSmile = 0;
  console.log(":)" === ":(");

  for (let i = 0; i < e.length; i++) {
    if (e[i] === ":)" || e[i] === ":D" || e[i] === ";D" || e[i] === ":-D") {
      countSmile++;
    } else {
      countSmile = countSmile;
    }
  }

  return countSmile;
}

console.log(countSmiles([":D", ":~)", ";~D", ":)"]));
