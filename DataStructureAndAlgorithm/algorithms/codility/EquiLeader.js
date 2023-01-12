function solution(a) {
  let total = 0;

  let size = 0;
  let value = 0;
  // leader와 count 찾기
  for (let i = 0; i < a.length; i++) {
    if (!size) {
      value = a[i];
      size += 1;
    } else {
      if (value === a[i]) size += 1;
      else size -= 1;
    }
  }
  if (!size) return total;
  let rcount = 0;
  let lcount = 0;
  for (let i = 0; i < a.length; i++) {
    if (value === a[i]) rcount += 1;
  }
  for (let i = 0; i < a.length - 1; i++) {
    // i = left 현재 값 (i + 1 은 left 길이) j - 1 = right 길이
    let j = a.length - i;
    if (a[i] === value) {
      lcount += 1;
      rcount -= 1;
    }
    if (Math.trunc((i + 1) / 2) < lcount && Math.trunc((j - 1) / 2) < rcount)
      total += 1;
  }
  return total;
}
