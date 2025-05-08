const data = [2, 3, 9, 13, 19, 23, 25, 31];
const ceiling = (nums: number[], target: number): number => {
  let lo: number = 0;
  let hi: number = nums.length - 1;

  while (lo <= hi) {
    const middle: number = Math.floor(lo + (hi - lo) / 2);
    const middleValue: number = nums[middle];
    if (target === middleValue) {
      return middle;
    }
    if (target > middleValue) {
      lo = middle + 1;
    } else {
      hi = middle - 1;
    }
  }
  return lo;
};
console.log(ceiling(data, 25));
