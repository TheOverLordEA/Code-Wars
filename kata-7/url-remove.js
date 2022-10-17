//Create a function that filters out everything after # url

function removeUrAnchor(str) {
  let index = str.indexOf("#");

  return index === -1 ? str : str.slice(0, index);
}
// console.log(removeUrAnchor("www.codewars.com"));
