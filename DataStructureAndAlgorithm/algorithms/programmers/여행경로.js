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
