function solution(a) {
  let size = 0;
  let value = 0;
  for (let i = 0; i < a.length; i++) {
    if (!size) {
      value = a[i];
      size += 1;
    } else {
      if (value === a[i]) size += 1;
      else size -= 1;
    }
  }
  if (!size) return -1;
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (value === a[i]) {
      count += 1;
      if (count > Math.trunc(a.length / 2)) return i;
    }
  }
  return -1;
}
