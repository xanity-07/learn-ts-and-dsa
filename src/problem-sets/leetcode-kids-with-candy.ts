function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let maxCandy: number = 0;
  const result: boolean[] = [];
  for (let candy of candies) {
    if (candy > maxCandy) {
      maxCandy = candy;
    }
  }

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= maxCandy) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
}

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
