function solution(a) {
  const arr = new Array(a.length + 1).fill(false);
  a.forEach((x) => {
    arr[x - 1] = true;
  });
  return arr.indexOf(false) + 1;
}
