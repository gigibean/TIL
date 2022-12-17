function solution(dirs) {
  let cur = [5, 5];
  const points = [];
  for (let dir of dirs) {
    let tmpCur = [...cur];
    switch (dir) {
      case "L":
        if (cur[1] !== 0) tmpCur[1] -= 1;
        break;
      case "R":
        if (cur[1] !== 10) tmpCur[1] += 1;
        break;
      case "D":
        if (cur[0] !== 10) tmpCur[0] += 1;
        break;
      case "U":
        if (cur[0] !== 0) tmpCur[0] -= 1;
        break;
    }
    const point = [cur.join(","), tmpCur.join(",")];
    if (point[0] !== point[1]) {
      points.push(point);
      cur = [...tmpCur];
    }
  }
  const setPoints = points.filter(
    (point, index) =>
      points.findIndex(
        (item) =>
          (item[0] === point[0] && item[1] === point[1]) ||
          (item[0] === point[1] && item[1] === point[0])
      ) === index
  );
  return setPoints.length;
}
