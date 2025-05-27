const testData: number[] = [15, 15, 23, 17, 68, 15, 17, 42, 31, 19, 31, 11, 42];
//* Recusrive Solution
const arrayList = new Array<number>();
function recursiveLinearSearch(
  nums: number[],
  target: number,
  index: number = 0
): void {
  if (index === nums.length) return;
  if (target === nums[index]) arrayList.push(index);
  return recursiveLinearSearch(nums, target, index + 1);
}
recursiveLinearSearch(testData, 15);

function returnListLinearSearch(
  nums: number[],
  target: number,
  list: number[],
  index: number = 0
): number[] {
  if (index === nums.length) return list;
  if (target === nums[index]) list.push(index);
  return returnListLinearSearch(nums, target, list, index + 1);
}

//* Iterative Solution
const linearSearch = (nums: number[], target: number): number[] => {
  const arrayList = new Array<number>();
  for (let i = 0; i < nums.length; i++) {
    if (target === nums[i]) {
      arrayList.push(i);
    }
  }
  return arrayList;
};
console.log(arrayList);
console.log(returnListLinearSearch(testData, 31, []));
console.log(linearSearch(testData, 17));
