function solution(n, t, m, p) {
  // t * m 만큼의 길이를 가지는 배열에 진법에 따른 숫자 하나씩 추가
  const arr = [];
  let i = 0;
  while (arr.length < t * m) {
    const cur = i.toString(n).toUpperCase().split("");
    arr.push(...cur);
    i += 1;
  }
  // % m === p-1 인 수들 담아서 출력
  const ans = arr.reduce((acc, cur, i) => {
    if (i % m === p - 1 && acc.length < t) {
      acc += cur;
    }
    return acc;
  }, "");
  return ans;
}
