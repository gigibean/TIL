const fs = require("fs");
const input = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin")
  : `11001100`
)
  .toString()
  .trim()
  .split("");
let result = [];
// 비트 연산자 사용
while (input.length) {
  let tmp = 0;
  for (let i = 0; i < 3; i++) {
    let eachchar = parseInt(input.pop());
    if (!eachchar) continue;
    tmp += 1 << i;
  }
  result.push(tmp);
}
console.log(result.reverse().join(""));

// 각비트에 자릿수 곱하는 방법
// let len = input.length;
// let result = "";
// if (len % 3 === 1) result += input[0];
// else if (len % 3 === 2) {
//   result += parseInt(input[0]) * 2 + parseInt(input[1]);
// }
// for (let i = len % 3; i < len; i += 3) {
//   result +=
//     parseInt(input[i]) * 4 +
//     parseInt(input[i + 1]) * 2 +
//     parseInt(input[i + 2]);
// }
// console.log(result);
