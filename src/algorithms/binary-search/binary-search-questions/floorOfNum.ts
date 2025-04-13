const data = [2, 3, 9, 13, 19, 23, 25, 31];
const floor = (nums: number[], target: number): number => {
  if (target < nums[0]) return -1;
  if (nums.length === 0) return -1;
  let lo = 0;
  let hi = nums.length - 1;

  while (lo <= hi) {
    const mid = Math.floor(lo + (hi - lo) / 2);
    if (target === nums[mid]) return mid;
    if (target > nums[mid]) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return hi;
};

console.log(floor(data, 4));
