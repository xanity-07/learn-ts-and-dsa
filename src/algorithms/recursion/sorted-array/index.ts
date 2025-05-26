function isSorted(sorted: number[], index: number = 0): boolean {
  if (index === sorted.length - 1) return true;
  return sorted[index] < sorted[index + 1] && isSorted(sorted, index + 1);
}

console.log(isSorted([1, 2, 3, 4, 9, 7, 8, 9], 0));
