const data = [3, 5, 7, 9, 10, 90, 100, 130, 140, 160, 170];
const binarySearch = (
  nums: number[],
  target: number,
  lo: number,
  hi: number
): number => {
  while (lo <= hi) {
    const middle: number = Math.floor(lo + (hi - lo) / 2);
    const middleValue: number = nums[middle];
    if (target === middleValue) {
      return middle;
    }
    if (target > middleValue) {
      lo = middle + 1;
    } else {
      hi = middle - 1;
    }
  }
  return -1;
};

const searchInfiniteRange = (nums: number[], target: number): number => {
  let lo: number = 0;
  let hi: number = 1;
  while (target >= nums[hi]) {
    let newLo: number = hi;
    hi = hi + (hi - lo + 1) * 2;
    lo = newLo;
  }
  return binarySearch(nums, target, lo, hi);
};
console.log(searchInfiniteRange(data, 170));
