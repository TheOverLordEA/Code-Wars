//Write a function that will return the sum of M

function stockLists(listOfArt, listofCat) {
  const a = [];
  const m = listOfArt.map((el, i) => el.split(" "));

  for (let i = 0; i < listofCat.length; i++) {
    for (let b = 0; b < m.length; b++) {
      if (listofCat[i] === m[b][0][0]) {
        a.push([m[b][0], m[b][Number(1)]]);
      }
    }
  }

  return a;
}

// console.log(
//   stockLists(
//     ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"],
//     ["A", "B"]
//   )
// );
