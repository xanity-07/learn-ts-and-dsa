const data = [2, 3, 9, 13, 19, 23, 25, 31];
const floor = (nums: number[], target: number): number => {
  let s: number = 0;
  let e: number = nums.length;
  while (s <= e) {
    const m = Math.floor(s + (e - s) / 2);
    if (target === nums[m]) return m;
    if (target > nums[m]) {
      s = m + 1;
    } else {
      e = m - 1;
    }
  }
  return e;
};

console.log(floor(data, 33));
