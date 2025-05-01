const search = (nums: number[], target: number): number => {
  const pivot: number = findPivot(nums);
  let lo: number = 0;
  let hi: number = pivot;
  let isAccending: boolean = nums[pivot] < nums[pivot + 1];

  while (lo <= hi) {
    const middle: number = Math.floor(lo + (hi - lo) / 2);
    if (target === nums[middle]) {
      return middle;
    }
    if (isAccending) {
      if (target > nums[middle]) {
        lo = middle + 1;
      } else {
        hi = middle - 1;
      }
    } else {
      if (target > nums[middle]) {
        hi = middle - 1;
      } else {
        lo = middle + 1;
      }
    }
  }
  return -1;
};

const findPivot = (nums: number[]): number => {
  let lo: number = 0;
  let hi: number = nums.length - 1;
  while (lo < hi) {
    const middle: number = Math.floor(lo + (hi - lo) / 2);
    if (nums[middle] > nums[middle + 1]) {
      hi = middle;
    } else {
      lo = middle + 1;
    }
  }

  return lo;
};

let target = 7;
console.log(search([3, 4, 5, 6, 7, 0, 1, 2], target));
