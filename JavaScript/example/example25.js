function countBiggerThanTen(numbers) {
    const array = numbers;
    let s = array.filter((number) => number > 10);
    return s.length;
  }
  
  const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
  console.log(count); // 5