function solution(files) {
  const seperatedFiles = files.map((file) => {
    let splitedName = file.split(/(\d+)/);
    let lastName = splitedName.slice(2).join("");
    return [...splitedName.slice(0, 2), lastName];
  });
  seperatedFiles.sort((a, b) => {
    const strA = a[0].toLowerCase();
    const strB = b[0].toLowerCase();
    if (strA > strB) return 1;
    else if (strA === strB) {
      if (+a[1] > +b[1]) return 1;
      else if (+a[1] === +b[1]) return 0;
      else return -1;
    }
    return -1;
  });

  return seperatedFiles.map((file) => file.join(""));
}
