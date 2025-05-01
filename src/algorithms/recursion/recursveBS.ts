const recursiveBinarySearch = (
  nums: number[],
  target: number,
  s: number,
  e: number
): number => {
  const m = Math.floor(s + (e - s) / 2);
  if (s > e) return -1;
  if (target === nums[m]) return m;
  if (target > nums[m]) return recursiveBinarySearch(nums, target, m + 1, e);
  return recursiveBinarySearch(nums, target, s, m - 1);
};

console.log(
  recursiveBinarySearch(
    [-10, -3, -1, 0, 3, 4, 7, 9, 12],
    12,
    0,
    [-10, -3, -1, 0, 3, 4, 7, 9, 12].length
  )
);
