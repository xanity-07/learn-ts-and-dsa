const findRange = (nums: number[], target: number): number[] => {
  const result: number[] = [];
  const first = search(nums, target, true);
  const last = search(nums, target, false);
  result[0] = first;
  result[1] = last;

  return result;
};

const search = (nums: number[], target: number, firstIdx: boolean): number => {
  let result: number = -1;
  let s: number = 0;
  let e: number = nums.length - 1;

  while (s <= e) {
    const m = Math.floor(s + (e - s) / 2);
    if (target > nums[m]) {
      s = m + 1;
    } else if (target < nums[m]) {
      e = m - 1;
    } else {
      result = m;
      if (firstIdx) {
        e = m - 1;
      } else {
        s = m + 1;
      }
    }
  }
  return result;
};

console.log(findRange([2, 3, 4, 7, 7, 7, 8, 9], 9));
