const binarySearch = (
  nums: number[],
  target: number,
  lo: number,
  hi: number
): number => {
  while (lo <= hi) {
    const middle: number = Math.floor(lo + (hi - lo) / 2);
    if (target === nums[middle]) return middle;
    if (target > nums[middle]) {
      lo = middle + 1;
      binarySearch(nums, target, lo, hi);
    } else {
      hi = middle - 1;
      binarySearch(nums, target, lo, hi);
    }
  }
  return -1;
};

const target: number = 4;
const data: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(data, target, 0, data.length - 1));
