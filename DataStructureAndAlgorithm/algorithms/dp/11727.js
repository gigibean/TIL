```
문제
2×n 직사각형을 1×2, 2×1과 2×2 타일로 채우는 방법의 수를 구하는 프로그램을 작성하시오.

아래 그림은 2×17 직사각형을 채운 한가지 예이다.



입력
첫째 줄에 n이 주어진다. (1 ≤ n ≤ 1,000)

출력
첫째 줄에 2×n 크기의 직사각형을 채우는 방법의 수를 10,007로 나눈 나머지를 출력한다.

예제 입력 1 
2
예제 출력 1 
3
예제 입력 2 
8
예제 출력 2 
171
예제 입력 3 
12
예제 출력 3 
2731
``````
1. 2 x 1 일 때:
경우의 수 : 1

2. 2 x 2 일 때: 
경우의 수 : 3

3. 2 x 3 일 때:
경우의 수: 5

4. 2 x 4 일 때:
경우의 수: 11

5. 2 x 5 일 때:
경우의 수: 21

...

5(2 x 3 일 때)는 
(3(2 x 2 일 때) + 1(2 x 1 일 때)) + 1(2 x 1 일 때)

11(2 x 4 일 때)는 
(5(2 x 3 일 때) + 3(2 x 2 일 때)) + 3(2 x 3 일 때)

21(2 x 5 일 때)는 
(11(2 x 4 일 때) + 5(2 x 3 일 때)) + 5(2 x 3 일 때)

...

그러므로 DP는
DP[i] = DP[i - 1] + (2 * DP[i - 2])
규칙을 가진다.

여기서 i 는 2 * n 의 n이다. 
i = n

그리고 DP[i] 가 담고 있는 값은 n 인 경우의 방법의 수이다.
ex: DP[1] = 1, DP[2] = 3; DP[3] = 5 ,,,
```;

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

let size = parseInt(input); // n
const DP = new Array(size + 1).fill(0);
// array를 1 부터 시작하기 때문에 size + 1 만큼의 배열 생성
DP[1] = 1;
DP[2] = 3;
for (let i = 3; i <= size; i++) {
  DP[i] = (DP[i - 1] + 2 * DP[i - 2]) % 10007;
}

console.log(DP[size]);