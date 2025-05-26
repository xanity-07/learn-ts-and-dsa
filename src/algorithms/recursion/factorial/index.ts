// * Factorial is a number times that number - 1 so we can say that factorial of 5 is
// * 5 * 4 * 3 * 2 * 1

const factorial = (n: number): number => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return n * factorial(n - 1);
};
console.log(factorial(5));

// * The call stack looks like this
// * 5 x 5 - 1(4) -> 120
// * 4 x 4 - 1(3) -> 24
// * 3 x 3 - 1(2) -> 6
// * 2 x 2 - 1(1) -> 2
// * 1 x 1 - 1(0) -> 1 bacause n === 1

//* Return values look like this
//* From bottom to top
//* Output: 120
//* 5 x 24 = 120
//* 4 x 6 = 24
//* 3 x 2 = 6
//* 2 x 1 = 2
//* 1 x 1 = 1
