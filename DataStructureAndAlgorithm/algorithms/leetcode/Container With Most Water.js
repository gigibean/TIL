/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;
  let i = 0;
  let j = height.length - 1;
  while (i < j) {
    const curHeight = height[i] > height[j] ? height[j] : height[i];
    const curMax = (j - i) * curHeight;
    if (max < curMax) max = curMax;
    if (height[i] > height[j]) j--;
    else i++;
  }
  return max;
};
