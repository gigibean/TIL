function solution(survey, choices) {
  var answer = "";
  const personal = [
    ["R", "T"],
    ["C", "F"],
    ["J", "M"],
    ["A", "N"],
  ];
  const type = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };
  const SelectedAl = (choice) => {
    if (choice > 4) return [1, choice - 4];
    else if (choice < 4) return [0, 4 - choice];
    else return [0, 0];
  };
  const bigger = (a, b) => {
    const typea = type[a];
    const typeb = type[b];
    if (typea > typeb) return a;
    else if (typea < typeb) return b;
    else return a.charCodeAt() > b.charCodeAt(b) ? b : a;
  };
  survey.forEach((item, index) => {
    const tmp = SelectedAl(choices[index]);
    type[item[tmp[0]]] += tmp[1];
  });
  personal.forEach((item) => {
    const tmp = bigger(...item);
    answer += tmp;
  });
  return answer;
}
