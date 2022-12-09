function solution(s) {
  const ans = [];
  const reg = /{([\d,]+)}/g;
  const tmp = [];
  s.replace(reg, (_, m) => tmp.push(m.split(",").map((item) => +item)));
  tmp.sort((a, b) => a.length - b.length);
  ans.push(tmp[0][0]);
  for (let i = 1; i < tmp.length; i++) {
    ans.push(...tmp[i].filter((x) => !ans.includes(x)));
  }
  return ans;
}
