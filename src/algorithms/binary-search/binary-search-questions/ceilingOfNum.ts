const data = [2, 3, 9, 13, 19, 23, 25, 31];
const ceiling = (nums: number[], target: number): number => {
  if (target > nums[nums.length - 1]) return -1;
  if (nums.length === 0) return -1;
  let lo = 0;
  let hi = nums.length - 1;

  while (lo <= hi) {
    const middle = Math.floor(lo + (hi - lo) / 2);
    if (target === middle) return middle;
    if (target > nums[middle]) {
      lo = middle + 1;
    } else {
      hi = middle - 1;
    }
  }
  return lo;
};
console.log(ceiling(data, -1));
