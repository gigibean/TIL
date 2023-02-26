const combinate = (arr, num) => {
  const result = [];
  if (num === 1) return arr.map((el) => [el]);

  arr.forEach((fix, index, origin) => {
    const rest = origin.slice(index + 1);
    const combination = combinate(rest, num - 1);
    const attatched = combination.map((el) => [fix, ...el]);
    result.push(...attatched);
  });
  return result;
};
function solution(orders, course) {
  const ans = [];
  const keys = [];
  const obj = {};
  course.forEach((num) => {
    orders.forEach((order) => {
      const eachCombi = combinate(order.split(""), num);
      keys.push(...eachCombi);
    });
  });
  keys.forEach((key) => {
    const str = key.sort().join("");
    const len = key.length;
    if (!obj[len]) obj[len] = {};
    if (!obj[len][str]) obj[len][str] = 0;
    obj[len][str] += 1;
  });
  course.forEach((num) => {
    if (obj[num]) {
      let menuCombi = Object.entries(obj[num]);
      menuCombi = menuCombi.sort((a, b) => b[1] - a[1]);
      for (let i = 0; i < menuCombi.length; i++) {
        if (menuCombi[i][1] >= 2 && menuCombi[0][1] === menuCombi[i][1])
          ans.push(menuCombi[i][0]);
        else break;
      }
    }
  });
  return ans.sort();
}
