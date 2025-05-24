const recursiveBinarySearch = (
  nums: number[],
  target: number,
  s: number,
  e: number
): number => {
  while (s <= e) {
    const middle: number = Math.floor(s + (e - s) / 2);
    if (target === nums[middle]) return middle;
    if (target > nums[middle]) {
      s = middle + 1;
      recursiveBinarySearch(nums, target, s, e);
    } else {
      e = middle - 1;
      recursiveBinarySearch(nums, target, s, e);
    }
  }
  return -1;
};

console.log(
  recursiveBinarySearch(
    [-10, -3, -1, 0, 3, 4, 7, 9, 12],
    12,
    0,
    [-10, -3, -1, 0, 3, 4, 7, 9, 12].length
  )
);
