const binarySearch = (nums: number[], target: number) => {
  let lo = 0;
  let hi = nums.length - 1;
  while (lo <= hi) {
    const middle = Math.floor(lo + (hi - lo) / 2);
    if (nums[middle] === target) return middle;

    if (target > nums[middle]) {
      lo = middle + 1;
    } else {
      hi = middle - 1;
    }
  }
  return -1;
};
console.log(binarySearch([], 10));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));
