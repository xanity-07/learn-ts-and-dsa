//* Iterative Solution
function isSortedArr(sorted: number[], idx: number = 0): boolean {
  for (idx; idx < sorted.length; idx++) {
    if (sorted[idx] > sorted[idx + 1]) {
      return false;
    }
  }
  return true;
}
console.log(isSortedArr([1, 2, 3, 4, 5, 7, 8, 9], 0));

//* Recursive Solution
function isSorted(sorted: number[], index: number = 0): boolean {
  if (index === sorted.length - 1) return true;
  return sorted[index] < sorted[index + 1] && isSorted(sorted, index + 1);
}

console.log(isSorted([1, 2, 3, 4, 9, 7, 8, 9], 0));
