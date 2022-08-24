function solution(brown, yellow) {
  var answer = [];
  // yellow 격자 경우의 수 구하기
  const yellowCases = [];
  let brownCase = [];
  for (let i = 1; i <= Math.ceil(yellow / 2); i++) {
    if (yellow % i === 0) yellowCases.push([i, yellow / i]);
  }
  // yellow 경우의 수로 brown 수와 일치하는 값 찾기
  function findBrownCase() {
    yellowCases.forEach((yellowCase) => {
      const brownCount = yellowCase[0] * 2 + yellowCase[1] * 2 + 4;
      if (brownCount === brown) {
        brownCase = yellowCase;
      }
    });
  }
  findBrownCase();
  if (brownCase[0] < brownCase[1]) {
    const tmp = brownCase[0];
    brownCase[0] = brownCase[1];
    brownCase[1] = tmp;
  }
  // 격자 개수 구하기
  answer = [brownCase[0] + 2, brownCase[1] + 2];
  return answer;
}
