//Create function that warns sheep in front of the wolf else ask wolf not to eat your sheep a

function findWolf(arr) {
  let flipArr = arr.reverse();

  if (flipArr[0] === "wolf") {
    return "Pls go away and stop eating my sheep";
  } else {
    for (let i of flipArr) {
      console.log(i);
      if (i === "wolf") {
        return `Oi! Sheep number ${flipArr.indexOf(
          i
        )} You are about to be eaten by a wolf!`;
      }
    }
  }
}

console.log(
  findWolf(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"])
);
