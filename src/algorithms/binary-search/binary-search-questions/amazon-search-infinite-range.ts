const data = [3, 5, 7, 9, 10, 90, 100, 130, 140, 160, 170];
const binarySearch = (
  nums: number[],
  target: number,
  lo: number,
  hi: number
) => {
  while (lo <= hi) {
    const middle = Math.floor(lo + (hi - lo) / 2);

    if (target > nums[middle]) {
      lo = middle + 1;
    } else if (target < nums[middle]) {
      hi = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
};

const searchInfiniteRange = (nums: number[], target: number) => {
  let lo = 0;
  let hi = 1;

  while (target > nums[hi]) {
    let newLo = hi + 1;
    hi = hi + (hi - lo + 1) * 2;
    lo = newLo;
  }

  return binarySearch(nums, target, lo, hi);
};

console.log(searchInfiniteRange(data, 10));
