const data = [1, 3, 5, 7, 9, 13, 17, 23];

const floorOfANumber = (nums: number[], target: number): number | undefined => {
  if (nums.length === 0) return undefined;
  if (target < nums[0]) return 0;

  let lo = 0;
  let hi = nums.length - 1;

  while (lo <= hi) {
    const middle = Math.trunc(lo + (hi - lo) / 2);
    if (target === nums[middle]) return middle;

    if (target > nums[middle]) {
      lo = middle + 1;
    } else {
      hi = middle - 1;
    }
  }
  return hi;
};

console.log(floorOfANumber(data, 120));
