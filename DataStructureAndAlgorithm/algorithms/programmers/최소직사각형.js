function solution(sizes) {
  let biggestSize = sizes[0];

  sizes.forEach((size) => {
    const biggestX = biggestSize[0] < size[0] ? size[0] : biggestSize[0];
    const biggestY = biggestSize[1] < size[1] ? size[1] : biggestSize[1];
    const flippedBiggestX = biggestSize[0] < size[1] ? size[1] : biggestSize[0];
    const flippedBiggestY = biggestSize[1] < size[0] ? size[0] : biggestSize[1];
    if (biggestX * biggestY < flippedBiggestX * flippedBiggestY)
      biggestSize = [biggestX, biggestY];
    else biggestSize = [flippedBiggestX, flippedBiggestY];
  });

  return biggestSize[0] * biggestSize[1];
}
