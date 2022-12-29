function solution(n) {
  let m = 0;
  let ans = [];
  let cur = n;
  let i = 1;
  while (cur > 0) {
    let j = i - 1;
    m = cur % Math.pow(3, i);
    ans.push(parseInt(m / Math.pow(3, j)) || 4);
    cur -= m || Math.pow(3, i);
    i++;
  }
  return ans.reverse().join("");
}
