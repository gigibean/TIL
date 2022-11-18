function solution(n) {
  let tmp = n + 1;
  let tmpCnt = tmp.toString(2).match(/1/g).length;
  const nsCnt = n.toString(2).match(/1/g).length;
  while (tmpCnt !== nsCnt) {
    tmp += 1;
    tmpCnt = tmp.toString(2).match(/1/g).length;
  }
  return tmp;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/12911
