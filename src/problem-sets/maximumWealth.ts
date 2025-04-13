function maximumWealth(accounts: number[][]): number {
  let maxWealth = 0;
  for (let i = 0; i < accounts.length; i++) {
    let totalBalance = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      totalBalance += accounts[i][j];
    }
    if (totalBalance > maxWealth) {
      maxWealth = totalBalance;
    }
  }

  return maxWealth;
}

console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
);
