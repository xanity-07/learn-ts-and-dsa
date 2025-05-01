const orderAgnosticBS = (nums: number[], target: number): number => {
  let lo: number = 0;
  let hi: number = nums.length - 1;
  const isAcending = nums[lo] < nums[hi];

  while (lo <= hi) {
    const m = Math.floor(lo + (hi - lo) / 2);
    if (isAcending) {
      if (target > nums[m]) {
        lo = m + 1;
      } else if (target < nums[m]) {
        hi = m - 1;
      } else {
        return m;
      }
    } else {
      if (target > nums[m]) {
        hi = m - 1;
      } else if (target < nums[m]) {
        lo = m + 1;
      } else {
        return m;
      }
    }
  }
  return -1;
};

console.log(orderAgnosticBS([-10, -3, -1, 0, 3, 4, 7, 9, 12], 4)); // 5
console.log(orderAgnosticBS([12, 9, 7, 4, 3, 0, -1, -3, -10], 4)); // 3
