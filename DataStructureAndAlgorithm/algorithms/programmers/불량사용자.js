const dfs = (depth, matches, result, arr) => {
  if (depth === matches.length) {
    let flag = true;
    for (let i = 0; i < result.length; i++) {
      if (!result[i].filter((item) => !arr.includes(item)).length) {
        // 차집합이 없다면
        flag = false; // 플래그 변경 -> 같은 배열이 result에 존재한다는 것
        break;
      }
    }
    if (flag) result.push(arr);
    return;
  }
  for (let i = 0; i < matches[depth].length; i++) {
    if (!arr.includes(matches[depth][i])) {
      dfs(depth + 1, matches, result, [...arr, matches[depth][i]]);
    }
  }
};

function solution(user_id, banned_id) {
  let matches = banned_id.map((id) => {
    // 2차 배열로 banned_id 에 해당하는 user_id 를담은 배열반환
    let isreg = true;
    const reg = new RegExp(`\\*{${id.length}}`); // id의 len 만큼 * 인지 확인 맞다면 아래 정규식을 사용할 필요 없음
    if (reg.test(id)) isreg = false;
    if (isreg) {
      id = id.replaceAll("*", "[a-z0-9]");
    } else {
      id = `[a-z0-9]{${id.length}}`;
    }
    const tmp = id.split("");
    tmp.unshift("^");
    tmp.push("$");
    id = tmp.join("");
    const matchReg = new RegExp(`${id}`);

    return user_id.filter((x) => {
      if (matchReg.test(x)) return x;
    });
  });
  matches.sort((a, b) => a.length - b.length);
  for (let i = 0; i < matches.length; i++) {
    if (matches[i].length) break;
    else matches.shift();
  }
  // matches 를 조합하여 가능한 경우의 수 구하기
  // 중복으로 같은 아이디가 들어갈수없다
  // 순서가 달라도 같은 아이디를 담은 배열이라면 같은 배열로 친다
  const result = [];
  dfs(0, matches, result, []);
  return result.length;
}
// function recursive(idx, matches, result, current) {
//   const length = matches.length;

//   if (idx === length - 1) {
//     result.push(current);
//     return;
//   }
//   const nextMatches = matches[idx + 1];
//   const nextLength = nextMatches.length;

//   for (let i = 0; i < nextLength; i++) {
//     recursive(idx + 1, matches, result, [...current, matches[idx + 1][i]]);
//   }
// }

// function solution(user_id, banned_id) {
//   const matches = banned_id.map((id) => {
//     // 2차 배열로 banned_id 에 해당하는 user_id 를담은 배열반환
//     let isreg = true;
//     const reg = new RegExp(`\\*{${id.length}}`); // id의 len 만큼 * 인지 확인 맞다면 아래 정규식을 사용할 필요 없음
//     if (reg.test(id)) isreg = false;
//     if (isreg) {
//       id = id.replaceAll("*", ".");
//       id += "$";
//     } else {
//       id = `.{${id.length}}`;
//     }
//     const matchReg = new RegExp(`${id}`);

//     return user_id.filter((x) => {
//       if (matchReg.test(x)) return x;
//     });
//   });
//   console.log(matches);
//   const result = [];
//   matches[0].forEach((match) => {
//     recursive(0, matches, result, [match]);
//   });
//   console.log(result);
//   // matches 를 조합하여 가능한 경우의 수 구하기
//   // 중복으로 같은 아이디가 들어갈수없다
//   // 순서가 달라도 같은 아이디를 담은 배열이라면 같은 배열로 친다
// }
