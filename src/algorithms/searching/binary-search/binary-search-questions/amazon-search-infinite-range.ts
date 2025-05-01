const data = [3, 5, 7, 9, 10, 90, 100, 130, 140, 160, 170];
const binarySearch = (
  nums: number[],
  target: number,
  lo: number,
  hi: number
): number => {
  while (lo <= hi) {
    const m = Math.floor(lo + (hi - lo) / 2);
    if (target > nums[m]) {
      lo = m + 1;
    } else if (target < nums[m]) {
      hi = m - 1;
    } else {
      return m;
    }
  }
  return -1;
};

const searchInfiniteRange = (nums: number[], target: number) => {
  let lo = 0;
  let hi = 1;
  while (target > nums[hi]) {
    let newStart: number = hi + 1;
    hi = hi + (hi - lo + 1) * 2;
    lo = newStart;
  }
  return binarySearch(nums, target, lo, hi);
};
console.log(searchInfiniteRange(data, 170));
