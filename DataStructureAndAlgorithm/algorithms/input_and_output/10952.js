```
문제
두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

입력
입력은 여러 개의 테스트 케이스로 이루어져 있다.

각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

출력
각 테스트 케이스마다 A+B를 출력한다.

예제 입력 1 
1 1
2 3
3 4
9 8
5 2
0 0
예제 출력 1 
2
5
7
17
7
```;
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  /* 
    [
    '1 1',
    '2 3',
    '0 0'
    ]
    [
    [1, 1],
    [2, 3],
    [0 ,0]
    ]
    */
  let li = [];
  li = input.map((value) => value.split(" "));
  for (let i = 0; i < li.length; i++) {
    if (li[i][0] === "0" && li[i][1] === "0") process.exit();
    console.log(parseInt(li[i][0]) + parseInt(li[i][1]));
  }
});
