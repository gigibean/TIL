```
이친수 분류
시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
2 초	128 MB	56800	22591	16808	37.994%
문제
0과 1로만 이루어진 수를 이진수라 한다. 이러한 이진수 중 특별한 성질을 갖는 것들이 있는데, 이들을 이친수(pinary number)라 한다. 이친수는 다음의 성질을 만족한다.

이친수는 0으로 시작하지 않는다.
이친수에서는 1이 두 번 연속으로 나타나지 않는다. 즉, 11을 부분 문자열로 갖지 않는다.

예를 들면 1, 10, 100, 101, 1000, 1001 등이 이친수가 된다. 하지만 0010101이나 101101은 각각 1, 2번 규칙에 위배되므로 이친수가 아니다.

N(1 ≤ N ≤ 90)이 주어졌을 때, N자리 이친수의 개수를 구하는 프로그램을 작성하시오.

입력
첫째 줄에 N이 주어진다.

출력
첫째 줄에 N자리 이친수의 개수를 출력한다.

예제 입력 1 
3
예제 출력 1 
2
``````
DP[1][0] = 0
DP[1][1] = 1
1

DP[2][0] = 1
10
DP[2][1] = 0

DP[3][0] = 1
100
DP[3][1] = 1
101

DP[4][0] = 2
1000 => 100 + 0
1010 => 101 + 0
DP[4][1] = 1
1001 => 100 + 1

DP[n][0] = DP[n-1][0] + DP[n-1][1]
DP[n][1] = DP[n-1][0]
```;

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();
const size = parseInt(input);
if (size !== 1) {
  const DP = Array.from(Array(size + 1), () => Array(2).fill(0));
  DP[1][0] = BigInt(0);
  DP[1][1] = BigInt(1);
  for (let n = 2; n <= size; n++) {
    DP[n][0] = BigInt(DP[n - 1][0]) + BigInt(DP[n - 1][1]);
    DP[n][1] = BigInt(DP[n - 1][0]);
  }
  console.log((BigInt(DP[size][0]) + BigInt(DP[size][1])).toString());
} else {
  console.log("1");
}

// 피보
const DP = [];
DP[0] = BigInt(0);
DP[1] = BigInt(1);
for (let i = 2; i <= size; i++) {
  DP[i] = BigInt(DP[i - 1] + DP[i - 2]);
}

console.log(DP[size].toString());
//
const DP = new Array(N + 1);
DP[0] = BigInt(0);
DP[1] = BigInt(1);

for (let i = 2; i <= N; i++) {
  DP[i] = BigInt(DP[i - 1] + DP[i - 2]);
}

console.log(DP[N].toString());
