//Write a function that converts the USA floor to European floor

function realFloor(floor) {
  if (floor === 0) {
    return floor;
  }

  if (floor < 0) {
    return floor;
  } else if (floor > 13) {
    return floor - 2;
  } else {
    return floor - 1;
  }
}

console.log(realFloor(0));
