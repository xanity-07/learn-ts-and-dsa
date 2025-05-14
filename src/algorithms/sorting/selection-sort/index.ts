function selectionSort(nums: number[]): number[] {
  for (let i = 0; i < nums.length - i; i++) {
    let last: number = nums.length - i - 1;
    const maxIndex: number = findMaxIndex(nums, 0, last);
    swap(nums, maxIndex, last);
  }
  return nums;
}

function findMaxIndex(nums: number[], start: number, end: number): number {
  let maxVal: number = start;
  for (let i = 0; i <= end; i++) {
    if (nums[i] > nums[maxVal]) {
      maxVal = i;
    }
  }
  return maxVal;
}

function swap(nums: number[], first: number, second: number) {
  let temp: number = nums[first];
  nums[first] = nums[second];
  nums[second] = temp;
}
const sortedNums = selectionSort([3, 2, 4, 5, 1]);
console.log(sortedNums);
