const fs = require("fs");
const input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `<   space   >space space space<    spa   c e>`;

const re = /<.+?>|\s/g;
const tmp = input.split(re);
console.log(tmp);
let result = [];
tmp.map((x) => {
  if (re.test(x)) {
    result += x;
  } else {
    let a = x.split("").reverse().join("");
    result += a;
  }
});
console.log(result);

// function findAllBracket(arr, el) {
//   let indices = [];
//   const array = arr;
//   let element = el;
//   let idx = array.indexOf(element);
//   while (idx != -1) {
//     indices.push(idx);
//     idx = array.indexOf(element, idx + 1);
//   }
//   return indices;
// }

// const startBracket = findAllBracket(input, "<");
// const endBracket = findAllBracket(input, ">");
// let result = [];
// let flagArr = new Array(input.length).fill(true);
// for (let k = 0; k < startBracket.length; k++) {
//   for (let j = startBracket[k]; j <= endBracket[k]; j++) {
//     flagArr[j] = false;
//   }
// }
// for (let i = 0; i < input.length; i++) {
//   if (input[i] === " ") {
//     flagArr[i] = false;
//   }
// }
// let temp = [];
// for (let i = 0; i < input.length; i++) {
//   if (flagArr[i] === true) {
//     temp.push(input[i]);
//     if (
//       flagArr[i + 1] === false ||
//       i === input.length - 1 ||
//       input[i + 1] === " "
//     ) {
//       result.push(temp.reverse().join(""));
//       temp = [];
//     }
//   } else {
//     result.push(input[i]);
//   }
// }

// result = result.join("");
// console.log(result);
