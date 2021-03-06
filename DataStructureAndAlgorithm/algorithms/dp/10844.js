```
문제
45656이란 수를 보자.

이 수는 인접한 모든 자리수의 차이가 1이 난다. 이런 수를 계단 수라고 한다.

세준이는 수의 길이가 N인 계단 수가 몇 개 있는지 궁금해졌다.

N이 주어질 때, 길이가 N인 계단 수가 총 몇 개 있는지 구하는 프로그램을 작성하시오. (0으로 시작하는 수는 없다.)

입력
첫째 줄에 N이 주어진다. N은 1보다 크거나 같고, 100보다 작거나 같은 자연수이다.

출력
첫째 줄에 정답을 1,000,000,000으로 나눈 나머지를 출력한다.

예제 입력 1 
1
예제 출력 1 
9
예제 입력 2 
2
예제 출력 2 
17
```;

```
n = 자릿 수
i = 0 - 9 의 수

DP[n][i] = 총 n 자리에서 i 가 마지막에 올 수 있는 경우의 수
ex: DP[2][2] = 2
    12,
    32
    DP[2][4] = 2
    34,
    54
    DP[3][3] = 4
    123,
    213,
    343,
    543,

위의 예시와 함께 규칙을 찾아보면,
3자리 수에서 3이 마지막에 올 수 있는 경우는
12 + 3,
32 + 3,
34 + 3,
54 + 3,
DP[2][2] + DP[2][4] 이다,

조합을 생각해보면 이해가 더 쉬워지는데,
계단 수에서
3 의 자리 수에 마지막 수가 3이 올 수 있는 경우의 조합은
계단 수 이기 때문에!
2 의 자리(10의 자리가) 수가 2로 끝나거나, 4로 끝나야 하기 때문이다
그리고 이를 일반화 시키면,

n 의 자리의 수에 마지막 수(1의 자리)가 i 가 올 수 있는 경우의 조합은
n - 1 의 자리의 수에 마지막 수(= n의 자리의 수의 10의 자리 수)가 
(i - 1 이 오는 경우의 조합 + i + 1 이 오는 경우의 조합)에 마지막에 + i를 붙이는 경우의 조합이다.
ex: DP[2][3] + DP[2][5] = DP[3][4]
DP[2][3] 의 경우의 조합: 
23,
43,
DP[2][5] 의 경우의 조합:
45,
65,
DP[3][4] 의 경우의 조합
234 (23 + 4),
434 (43 + 4),
454 (45 + 4),
654 (65 + 4),

그리고 여기서 예외 사항은 DP[n][i]의 i 가 0 이거나, 9인 경우이다.

마지막 수가 0이 올 수 있는 경우는 그 앞(10의 자리)의 수가 1인 경우 뒤에 0을 붙이는 조합이고,
마지막 수가 9가 올 수 있는 경우는 그 앞(10의 자리)의 수가 8인 경우 뒤에 9를 붙인는 조합이다.
그렇기 때문에 
DP[n][0] = DP[n - 1][1]
DP[n][9] = DP[n - 1][8] 
```;

```
n/i 0 1 2 3 4 5 6 7 8 9
1   0 1 1 1 1 1 1 1 1 1
2   1 1 2 2 2 2 2 2 2 1
3   1 3 3 4 4 4 4 4 3 2 
...
```;

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();
const size = parseInt(input);

const DP = Array.from(Array(size + 1), () => Array(11).fill(0));

let sum = 0;
for (let i = 1; i <= 9; i++) {
  DP[1][i] = 1;
}
for (let n = 2; n <= size; n++) {
  DP[n][0] = DP[n - 1][1];
  for (let i = 1; i <= 9; i++) {
    DP[n][i] = (DP[n - 1][i - 1] + DP[n - 1][i + 1]) % 1000000000;
  }
}
for (let i = 0; i <= 9; i++) {
  sum = (sum + DP[size][i]) % 1000000000;
}

console.log(sum);
