// //Create a function that will remove the string

// function solution(url) {
//   const array = url.split("");
//   const firstIndex = array.indexOf(".");

//   const end = array.lastIndexOf(".");

//   const first = [];
//   const last = [];

//   for (let i = 0; i < url.length; i++) {
//     if ("."  1) {
//       first.push(array[i]);
//     } else {
//       last.push(array[i]);
//     }
//   }

//   console.log(last);
//   if (first.length === 0) {
//     const myIndex = last.indexOf("/") + 2;

//     const q = last.indexOf(".");

//     return last.slice(myIndex, q).join("");
//   } else if (last.length === 0) {
//     const firsIndex = first.indexOf(".") + 1;
//     const end = first.lastIndexOf(".");
//     return first.slice(firsIndex, end);
//   }
// }

// console.log(solution("www.xakep.ru"));
