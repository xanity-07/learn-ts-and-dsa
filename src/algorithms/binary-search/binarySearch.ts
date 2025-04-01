const binarySearch = (nums: number[], target: number): boolean => {
  if (nums.length === 0) return false;
  let lo = 0;
  let hi = nums.length - 1;

  do {
    const middle = Math.trunc(lo + (hi - lo) / 2);
    if (nums[middle] === target) return true;

    if (target > nums[middle]) {
      lo = middle + 1;
    } else {
      hi = middle - 1;
    }
  } while (lo <= hi);

  return false;
};
export default binarySearch;
