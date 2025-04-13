const data = [12, 345, 2, 6, 7896];

const findNumbers = (arr: number[]) => {
  let evenCount = 0;

  for (let item of arr) {
    if (Math.abs(item).toString().length % 2 === 0) {
      evenCount++;
    }
  }
  return evenCount;
};

console.log(findNumbers(data));
