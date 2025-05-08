function findFistAndLastOccurance(nums: number[], target: number): number[] {
  return [binarySearch(nums, target, true), binarySearch(nums, target, false)];
}

function binarySearch(
  nums: number[],
  target: number,
  isFirstOccurance: boolean
): number {
  let lo: number = 0;
  let hi: number = nums.length - 1;
  let result: number = -1;
  while (lo <= hi) {
    const middle: number = Math.floor(lo + (hi - lo) / 2);
    const middleValue: number = nums[middle];
    if (target > middleValue) {
      lo = middle + 1;
    } else if (target < middleValue) {
      hi = middle - 1;
    } else {
      result = middle;
      if (isFirstOccurance) {
        hi = middle - 1;
      } else {
        lo = middle + 1;
      }
    }
  }
  return result;
}

console.log(findFistAndLastOccurance([1, 3, 4, 5, 5, 7, 7, 7, 9, 11], 1));
