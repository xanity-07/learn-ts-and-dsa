const test_data: number[] = [101, 15, 23, 17, 68, 19, 31, 11, 42];
//* Recursive Solution
function recursive_find(
  nums: number[],
  target: number,
  index: number = 0
): boolean {
  if (index === nums.length) return false;
  return nums[index] === target || recursive_find(nums, target, index + 1);
}

//* Iterative Solution
function find(nums: number[], target: number): boolean {
  for (let i = 0; i < nums.length; i++) {
    if (target === nums[i]) {
      return true;
    }
  }
  return false;
}

console.log(recursive_find(test_data, 19));
console.log(find(test_data, 42));
