function solution(arr) {
  const ans = [];
  const needVisited = [];
  const isMix = (arr) => {
    const flatedArr = arr.flat();
    for (let i = 0; i < flatedArr.length - 1; i++) {
      if (flatedArr[i] !== flatedArr[i + 1]) {
        return true;
      }
    }
    return false;
  };
  const makeArr = (num, start, end, arr) => {
    let mid = (start + end) / 2;
    if (mid > 1) {
      switch (num) {
        case "1":
          return Array.from(Array(mid)).map((x, i) => arr[i].slice(start, mid));
        case "2":
          return Array.from(Array(mid)).map((x, i) => arr[i].slice(mid, end));
        case "3":
          return Array.from(Array(mid)).map((x, i) =>
            arr[i + mid].slice(mid, end)
          );
        case "4":
          return Array.from(Array(mid)).map((x, i) =>
            arr[i + mid].slice(start, mid)
          );
      }
    } else return null;
  };
  for (let i = 1; i <= 4; i++) {
    const cur = makeArr(`${i}`, 0, arr.length, arr);
    if (cur !== null) needVisited.push(cur);
  }
  while (needVisited.length) {
    const cur = needVisited.pop();
    if (!isMix(cur)) ans.push(cur[0][0]);
    else {
      if (cur.length === 2) {
        cur.flat().forEach((x) => ans.push(x));
      } else {
        for (let j = 1; j <= 4; j++) {
          needVisited.push(makeArr(`${j}`, 0, cur.length, cur));
        }
      }
    }
  }
  const result = ans.reduce(
    (arr, item) => {
      if (item === 0) arr[0] += 1;
      else arr[1] += 1;
      return arr;
    },
    [0, 0]
  );
  if (result[0] === 0) return [0, 1];
  else if (result[1] === 0) return [1, 0];
  else return result;
}
