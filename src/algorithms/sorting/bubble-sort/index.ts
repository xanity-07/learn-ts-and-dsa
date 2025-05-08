function bubbleSort(nums: number[]): number[] {
  let swapped: boolean;
  for (let i = 0; i < nums.length; i++) {
    swapped = false;
    for (let j = 0; j < nums.length - i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return nums;
}

const sortedNums = bubbleSort([2, 3, 1, 4, 5]);
console.log(sortedNums);
