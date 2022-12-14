function solution(record) {
  const ans = [];

  // 변경 닉네임 찾기
  const ids = {};
  record.reduce((acc, cur) => {
    const [keyword, id, nickname] = cur.split(" ");
    if (keyword === "Enter" || keyword === "Change") {
      ids[id] = nickname;
    }
  }, ids);
  // Enter Leave 만 출이기
  // 변경 닉네임으로 사용하여 전체 바꾸기
  record.forEach((item) => {
    const [keyword, id, nickname] = item.split(" ");
    if (keyword === "Enter") {
      ans.push(`${ids[id]}님이 들어왔습니다.`);
    } else if (keyword === "Leave") {
      ans.push(`${ids[id]}님이 나갔습니다.`);
    }
  });
  return ans;
}
