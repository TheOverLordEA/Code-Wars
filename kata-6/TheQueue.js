//Write a function that calculates the number of people in the que

function checkOut(customer, booth) {
  if (customer.length == []) {
    return 0;
  } else if (booth === 1) {
    return customer.reduce((a, b) => a + b, 0);
  } else if (booth > customer.length) {
    return customer.sort((a, b) => a - b)[customer.length - 1];
  } else {
  }
}

console.log(checkOut([1, 5], 10));
