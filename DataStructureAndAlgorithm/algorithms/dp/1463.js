```
문제
정수 X에 사용할 수 있는 연산은 다음과 같이 세 가지 이다.

X가 3으로 나누어 떨어지면, 3으로 나눈다.
X가 2로 나누어 떨어지면, 2로 나눈다.
1을 뺀다.
정수 N이 주어졌을 때, 위와 같은 연산 세 개를 적절히 사용해서 1을 만들려고 한다. 연산을 사용하는 횟수의 최솟값을 출력하시오.

입력
첫째 줄에 1보다 크거나 같고, 106보다 작거나 같은 정수 N이 주어진다.

출력
첫째 줄에 연산을 하는 횟수의 최솟값을 출력한다.

예제 입력 1 
2
예제 출력 1 
1
예제 입력 2 
10
예제 출력 2 
3
힌트
10의 경우에 10 -> 9 -> 3 -> 1 로 3번 만에 만들 수 있다.
```;

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

let num = parseInt(input);
/* 10 */
const DP = new Array(num + 1).fill(0);
// DP[i]의 i 는 input 값
// DP[i]의 value는 연산횟수 count
/* DP[5] === 0 */
/* DP[4] + 1 === DP[5] */
/* DP[4/2] + 1 === DP[4] */
/* DP[2 -1] + 1 === DP[2] */

// DP 문제이기 때문에 작은 것부터 해결해야 함
// DP[1] = (DP[2 - 1]) + 1
// DP[2] = (DP[3 or 4] 가공) + 1
// DP[i] = min([DP[i + 1] | DP[i / 2] | DP[i / 3]] + 1 )

// 최소값구하는 것 생각하며, 1을 항상 빼고 시작하는
// loop문

for (let i = 2; i <= num; i++) {
  // 1 빼기
  DP[i] = DP[i - 1] + 1;
  // 2 or 3 어떤 수로 나눠지는지
  if (i % 2 === 0) {
    // DP[i + 1] + 1 의 count 수가 작은지
    // DP[i / 2] + 1 의 count 수가 작은지
    DP[i] = Math.min(DP[i], DP[i / 2] + 1);
  }
  if (i % 3 === 0) {
    DP[i] = Math.min(DP[i], DP[i / 3] + 1);
  }
}

console.log(DP[num]);
