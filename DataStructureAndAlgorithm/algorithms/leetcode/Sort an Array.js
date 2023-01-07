/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  const sort = (low, mid, high) => {
    const arr = [];
    let l = low;
    let h = mid;
    while (l < mid && h < high) {
      if (nums[l] > nums[h]) arr.push(nums[h++]);
      else arr.push(nums[l++]);
    }
    while (l < mid) arr.push(nums[l++]);
    while (h < high) arr.push(nums[h++]);
    for (let i = low; i < high; i++) {
      nums[i] = arr[i - low];
    }
  };

  const mergeSort = (low, high) => {
    if (high - low < 2) return;
    const mid = parseInt((low + high) / 2);
    mergeSort(low, mid);
    mergeSort(mid, high);
    sort(low, mid, high);
  };
  mergeSort(0, nums.length);
  return nums;
};
