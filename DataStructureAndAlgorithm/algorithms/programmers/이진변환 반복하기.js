function solution(s) {
  // s 에서 0 제거 (+)
  // s = 0 제거한 s 의 길이 이진변환
  //  1이면 return [changeCount, zeroCount]
  if (s === "1") return [0, 0];
  let zeroCount = 0;
  let changeCount = 0;
  while (s !== "1") {
    changeCount++;
    let tmpZero = 0;
    for (let num of s) {
      if (num === "0") tmpZero++;
    }
    zeroCount += tmpZero;
    s = (s.length - tmpZero).toString(2);
  }
  return [changeCount, zeroCount];
}

// https://school.programmers.co.kr/learn/courses/30/lessons/70129
