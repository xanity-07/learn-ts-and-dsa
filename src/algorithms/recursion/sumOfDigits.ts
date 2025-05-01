//* Input: 1234 → Output: 10 (1+2+3+4)

const sumOfDigits = (n: number): number => {
  if (n === 0) return 0;
  return (n % 10) + sumOfDigits(Math.floor(n / 10));
};

console.log(sumOfDigits(1234));

console.log(1234 % 10);
console.log(Math.floor(1234 / 10));
