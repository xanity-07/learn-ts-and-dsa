const data = [1, 4, 7, 15, 342, 64, 98, 12, 10];
const linearSearch = (nums: number[], target: number) => {
  for (let num of nums) {
    if (num === target) return true;
  }
  return false;
};

console.log(linearSearch(data, 10));
