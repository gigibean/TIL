const fs = require("fs");
const input =
  process.platform ===
  ("linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `()(((()())(())()))(())`
  ).split("");
// console.log(input);
// \( -> \) ==> \( index pop
// result += array.length
// \)의 index - 1 !== \( ==> result += 1
`
임시배열에 \( 나오는 거 쌓기 (스택)
1. \)가 나왔을 때 바로 전에 \(라면 
    1-1. 임시배열에 마지막 \( 지우고 
    1-2. 배열의 길이 만큼 result++
2. \)가 나왔을 때 바로전이 \(가 아니라면
    2-1. 하나의 막대기의 끝이므로 임시 배열에서 마지막 \( 지우기
    2-2. result++

그러나 전체 수만 구하면 되므로 따로 배열 만들지 않고 tmp에 \(의 개수만 담아서 계산
`;

let tmp = 0;
let result = 0;
input.map((x, i) => {
  if (x == "(") {
    tmp++;
  } else if (x == ")") {
    if (input[i - 1] == "(") {
      tmp--;
      result += tmp;
    } else {
      tmp--;
      result += 1;
    }
  }
});
console.log(result);
