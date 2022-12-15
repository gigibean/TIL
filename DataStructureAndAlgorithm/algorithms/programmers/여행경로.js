function solution(tickets) {
  const sortVisit = (arr) => {
    arr.sort((a, b) => {
      if (tickets[a][1] > tickets[b][1]) return -1;
      else 1;
    });
  };
  let visit = [];
  const needVisit = tickets.reduce((arr, ticket, index) => {
    const [sp, ep] = ticket;
    if (sp === "ICN") arr.push(index);
    return arr;
  }, []);
  sortVisit(needVisit);
  let bifurcation = -1;
  while (needVisit.length) {
    const endIndex = needVisit.pop();
    const startName = tickets[endIndex][1];
    const arrivals = tickets.reduce((arr, ticket, index) => {
      const [sp, ep] = ticket;
      if (endIndex !== index) {
        if (startName === sp && !visit.includes(index)) arr.push(index);
      }
      return arr;
    }, []);
    if (!visit.includes(endIndex)) visit.push(endIndex);
    if (arrivals.length > 1) {
      sortVisit(arrivals);
      bifurcation = endIndex;
    }
    if (arrivals.length) needVisit.push(...arrivals);
    if (!arrivals.length && visit.length < tickets.length) {
      const bifurcationIndex = visit.indexOf(bifurcation);
      visit = visit.slice(0, bifurcationIndex + 1);
    }
  }
  return visit.reduce(
    (arr, visitIndex, index) => {
      const visitAirport = tickets[visitIndex][1];
      arr.push(visitAirport);
      return arr;
    },
    ["ICN"]
  );
}

// 재귀함수
function solution(tickets) {
  let result = [];
  const dfs = (depth, str, start, visited) => {
    if (str.length === tickets.length + 1) {
      result = str;
      return;
    }

    const tmp = [];
    tickets.forEach((ticket, index) => {
      const [sp, ep] = ticket;
      if (sp === start) {
        if (!visited.includes(index)) {
          tmp.push([ep, index]);
        }
      }
    });
    if (tmp.length) {
      tmp.sort((a, b) => {
        if (a[0] > b[0]) return 1;
        else return -1;
      });
      tmp.forEach((item) => {
        const [ep, index] = item;
        if (!result.length)
          dfs(depth + 1, [...str, ep], ep, [...visited, index]);
      });
    }
  };
  dfs(0, ["ICN"], "ICN", []);
  return result;
}
