const peakIdx = (nums: number[]): number => {
  let lo = 0;
  let hi = nums.length - 1;
  while (lo < hi) {
    const m = Math.floor(lo + (hi - lo) / 2);
    if (nums[m] > nums[m + 1]) {
      hi = m;
    } else {
      lo = m + 1;
    }
  }
  return lo;
};
console.log(peakIdx([0, 2, 3, 5, 8, 8, 12, 19, 7, 4, 1]));
