const orderAgnosticBS = (nums: number[], target: number): number => {
  let start = 0;
  let end = nums.length - 1;
  const isAscending = nums[start] < nums[end];

  while (start <= end) {
    const middle = Math.floor(start + (end - start) / 2);
    if (target === nums[middle]) return middle;

    if (isAscending) {
      if (target > nums[middle]) {
        start = middle + 1;
      } else {
        end = middle - 1;
      }
    } else {
      if (target > nums[middle]) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
    }
  }
  return -1;
};

console.log(orderAgnosticBS([-10, -3, -1, 0, 3, 4, 7, 9, 12], 4)); // 5
console.log(orderAgnosticBS([12, 9, 7, 4, 3, 0, -1, -3, -10], 4)); // 3
