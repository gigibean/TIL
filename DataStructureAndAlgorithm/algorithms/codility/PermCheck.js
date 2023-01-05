function solution(a) {
  const arr = [];
  for (let i = 0; i < a.length; i++) {
    if (!arr[a[i] - 1]) {
      arr[a[i] - 1] = true;
    } else {
      return 0;
    }
  }
  if (!arr.includes(undefined)) return 1;
  return 0;
}
