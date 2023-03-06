function solution(p) {
  p = p.split("");
  const result = [];

  const checkRightBrackets = (brackets) => {
    const stack = [];
    if (brackets.length % 2 !== 0) return false;
    if (brackets[0] === ")") return false;
    brackets.forEach((bracket) => {
      if (stack.length === 0) stack.push(bracket);
      else {
        if (bracket === "(") stack.push(bracket);
        else stack.pop();
      }
    });
    if (stack.length) return false;
    return true;
  };
  if (checkRightBrackets(p)) return p.join("");

  const splite = (value) => {
    const arr = [...value];
    const tmp = [];
    let open = 0;
    let close = 0;
    let pivot = 0;
    for (let i = 0; i < value.length; i++) {
      if (arr[i] === "(") open += 1;
      else close += 1;
      if (open !== 0 && close !== 0 && open === close) {
        pivot = i;
        break;
      }
    }

    return [arr.slice(0, pivot + 1), arr.slice(pivot + 1)];
  };

  const recursive = (p) => {
    const tmp = [];
    if (p.length === 0) return [];
    const [u, v] = splite(p);
    if (checkRightBrackets(u)) {
      tmp.push(...u);
      tmp.push(...recursive(v));
      return tmp;
    } else {
      tmp.push("(");
      tmp.push(...recursive(v));
      tmp.push(")");
      if (u.length) {
        u.shift();
        u.pop();
        for (let i = 0; i < u.length; i++) {
          if (u[i] === "(") u[i] = ")";
          else u[i] = "(";
        }
      }
      tmp.push(...u);
      return tmp;
    }
  };

  return recursive(p).join("");
}
