//* Iterative solution
function reverseNum(n: number): number {
  const str: string = n.toString();
  const output: string[] = [];
  for (let char of str) {
    output.unshift(char);
  }
  return Number(output.join(''));
}
console.log(reverseNum(1234)); // * 4321

function reverse(n: number, result: number = 0): number {
  if (n === 0) {
    return result;
  }
  return reverse(Math.floor(n / 10), result * 10 + (n % 10));
}
console.log(reverse(1234));

function palin(n: number): boolean {
  return n === reverse(n);
}

console.log(palin(1234321));

function genericReverse(n: number): number;
function genericReverse(n: string): string;
function genericReverse(n: number | string): number | string {
  if (typeof n === 'number') {
    const reverseNumber = (n: number, result: number = 0): number => {
      if (n === 0) return result;
      return reverseNumber(Math.floor(n / 10), result * 10 + (n % 10));
    };
    return reverseNumber(n);
  }

  if (typeof n === 'string') {
    const reverseString = (s: string): string => {
      if (s.length <= 1) return s;
      return reverseString(s.slice(1)) + s[0];
    };
    return reverseString(n);
  }

  throw new Error('Unsupported type');
}

console.log(genericReverse(1234));
console.log(genericReverse('hello'));
