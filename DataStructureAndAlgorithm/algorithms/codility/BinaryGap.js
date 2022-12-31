function solution(N) {
  const bin = N.toString(2);
  const reg = /(?<=1)(0+)(?=1)/g;
  const matched = bin.match(reg);
  if (matched) {
    matched.sort((a, b) => a.length - b.length);
    return matched[matched.length - 1].length;
  }

  return 0;
}
