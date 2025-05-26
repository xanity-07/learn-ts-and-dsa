const countZeros = (n: number): number => {
  return helper(n, 0);
};

function helper(n: number, c: number): number {
  if (n === 0) {
    return c;
  }
  let rem: number = n % 10;
  if (rem === 0) {
    helper(Math.floor(n / 10), (c += 1));
  }
  return helper(Math.floor(n / 10), c);
}

console.log(countZeros(1204501007700)); // 6
