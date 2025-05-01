const input: number[] = [5, 7, 7, 7, 7, 8, 8, 10]; //   target = 7;

function searchRange(nums: number[], target: number): number[] {
  let result: number[] = [-1, -1];
  const first = search(nums, target, true);
  const last = search(nums, target, false);
  result[0] = first;
  result[1] = last;
  return result;
}

const search = (
  nums: number[],
  target: number,
  findStartIndex: boolean
): number => {
  let ans = -1;
  let lo = 0;
  let hi = nums.length - 1;

  while (lo <= hi) {
    const mid = Math.floor(lo + (hi - lo) / 2);
    if (target > nums[mid]) {
      lo = mid + 1;
    } else if (target < nums[mid]) {
      hi = mid - 1;
    } else {
      ans = mid;
      if (findStartIndex) {
        hi = mid - 1;
      } else {
        lo = mid + 1;
      }
    }
  }
  return ans;
};

console.log(searchRange(input, 7));
