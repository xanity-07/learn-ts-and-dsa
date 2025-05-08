function searchRotatedArr(nums: number[], target: number) {
  const pivot: number = findPivot(nums);
  const firstSearch: number = binarySearch(nums, target, 0, pivot);
  if (firstSearch !== -1) {
    return firstSearch;
  }
  return binarySearch(nums, target, pivot + 1, nums.length - 1);
}

function binarySearch(nums: number[], target: number, lo: number, hi: number) {
  while (lo <= hi) {
    const middle: number = Math.floor(lo + (hi - lo) / 2);
    if (nums[middle] === target) return middle;
    if (target > nums[middle]) lo = middle + 1;
    else hi = middle - 1;
  }
  return -1;
}

function findPivot(nums: number[]): number {
  let lo: number = 0;
  let hi: number = nums.length - 1;
  while (lo < hi) {
    const middle: number = Math.floor(lo + (hi - lo) / 2);
    if (nums[middle] > nums[middle + 1]) {
      return middle;
    }
    if (nums[middle] < nums[middle - 1]) {
      return middle;
    }

    if (nums[lo] >= nums[middle]) {
      hi = middle;
    }
    if (nums[lo] < nums[middle]) {
      lo = middle + 1;
    }
  }
  return -1;
}
console.log(searchRotatedArr([7, 10, 12, 1, 2, 5, 6], 2)); // 4
console.log(searchRotatedArr([6, 7, 8, 9, 5, 4, 3, 2, 1, 0], 2)); // 7
console.log(searchRotatedArr([10, 12, 1, 2, 5, 6, 7], 2)); // 3
