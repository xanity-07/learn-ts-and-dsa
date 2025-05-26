//* None recursive solution

function sumOfDigits(n: number): number {
  const numArray: string[] = n.toString().split('');
  let output: number = 0;
  for (let i = 0; i < numArray.length; i++) {
    output += Number(numArray[i]);
  }
  return output;
}
console.log(sumOfDigits(1342));

//* Recursive Solution
const recursiveSolution = (n: number): number => {
  if (n === 0) return 0;
  return (n % 10) + Math.floor(recursiveSolution(n / 10));
};

console.log(recursiveSolution(1342));
