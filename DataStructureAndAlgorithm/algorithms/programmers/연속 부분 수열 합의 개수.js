function solution(elements) {
  const set = new Set();
  for (let i = 1; i <= elements.length; i++) {
    if (i < elements.length) {
      for (let j = 0; j < elements.length; j++) {
        let tmp = 0;
        for (let k = j; k < j + i; k++) {
          if (k < elements.length) {
            tmp += elements[k];
          } else {
            tmp += elements[k - elements.length];
          }
        }
        if (!set.has(tmp)) {
          set.add(tmp);
        }
      }
    } else {
      let item = 0;
      item = elements.reduce((acc, cur) => acc + cur, 0);
      if (!set.has(item)) set.add(item);
    }
  }
  return set.size;
}
