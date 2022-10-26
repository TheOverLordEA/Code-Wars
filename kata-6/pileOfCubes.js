function pileOfCubes(m) {
  let counter = 0;

  while (m > 0) {
    counter++;

    const cubes = Math.pow(counter, 3);
    m = m - cubes;
  }
  if (Math.sign(m) === -1) {
    return -1;
  }

  return counter;
}
