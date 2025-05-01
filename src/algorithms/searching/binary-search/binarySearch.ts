const binarySearch = (nums: number[], target: number): number => {
  let s: number = 0;
  let e: number = nums.length - 1;
  while (s <= e) {
    const m = Math.floor(s + (e - s) / 2);
    if (target > nums[m]) {
      s = m + 1;
    } else if (target < nums[m]) {
      e = m - 1;
    } else {
      return m;
    }
  }
  return -1;
};
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));
