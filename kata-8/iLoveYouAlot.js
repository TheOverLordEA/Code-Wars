//Write a function that returns a string based on the pedal

function getHowMuchLove(int) {
  const array = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];

  let modifiefdArray = [];

  let i = 0;

  let y = 0;

  while (i < int) {
    modifiefdArray.push(array[i]);
    if (array[i] === undefined) {
      modifiefdArray.splice(i);
      modifiefdArray.push(array[y]);
      y++;
      if (y >= 6) {
        y = 0;
      }
    }
    i++;
  }
  return modifiefdArray[int - 1];
}

console.log(getHowMuchLove(10));

// function howMuchILoveYou(nbPetals) {
//   // your code
//   const array = [
//     "I love you",
//     "a little",
//     "a lot",
//     "passionately",
//     "madly",
//     "not at all",
//   ];

//   let modifiefdArray = [];

//   let i = 0;

//   let y = 0;

//   while (i < nbPetals) {
//     modifiefdArray.push(array[i]);
//     if (array[i] === undefined) {
//       modifiefdArray.splice(i);
//       modifiefdArray.push(array[y]);
//       y++;
//       if (y >= 6) {
//         y = 0;
//       }
//     }
//     i++;
//   }
//   return modifiefdArray[nbPetals];
// }

// console.log(howMuchILoveYou(1));
