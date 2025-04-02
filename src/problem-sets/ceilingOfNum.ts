//* Find the largest number of the given target that is greater than or equal to target
//* Example [2, 3, 5, 9, 14, 16, 18] target = 15 // return 16

const data = [2, 3, 5, 9, 14, 16, 18];

const findCeilingNum = (nums: number[], target: number): number | undefined => {
  if (nums.length === 0) return undefined;

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
  return lo;
};

console.log(findCeilingNum(data, -20));
