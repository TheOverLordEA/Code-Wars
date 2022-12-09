//Write a function that will return tha fail rate of a printer as string

function printerError(printerCode) {
  const sanitize = printerCode.split("");
  //Counter var
  let letterCounter = 0;

  //Create a array to store a to m

  const aToM = [
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  //Create loop

  for (let i = 0; i < aToM.length; i++) {
    for (let b = 0; b < sanitize.length; b++) {
      if (aToM[i] === sanitize[b]) {
        letterCounter++;
      }
    }
  }

  return `${letterCounter}/${sanitize.length}`;
}
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"));
