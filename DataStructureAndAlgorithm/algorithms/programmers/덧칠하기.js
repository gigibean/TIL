function solution(n, m, section) {
  let count = 0;
  let last = 0;
  while (section.length > 0) {
    const cur = section.shift();
    const tmp = cur + m - 1;
    last = tmp > n ? n : tmp;
    count += 1;
    while (last >= section[0]) {
      section.shift();
    }
  }
  return count;
}
