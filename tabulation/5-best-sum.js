const bestSum = (targetSum, numbers) => {
  const table = new Array(targetSum + 1).fill(null);
  table[0] = [];

  for (let i = 0; i < table.length; i++) {
    if (table[i]) {
      for (const num of numbers) {
        if (i + num < table.length) {
          const combination = [...table[i], num];
          if (!table[i + num] || combination.length < table[i + num])
            table[i + num] = combination;
        }
      }
    }
  }

  return table[targetSum];
};

// Complexity
// Tabulation
// Time: O(n*m^2)
// Space: O(m^2)

console.log('bestSum(7, [2,3,4])', bestSum(7, [2, 3, 4]));
console.log('bestSum(7, [5,3,4])', bestSum(7, [5, 3, 4]));
console.log('bestSum(8, [3,4])', bestSum(8, [3, 4]));
console.log('bestSum(15, [2,3,4])', bestSum(15, [2, 3, 4]));
console.log('bestSum(300, [7,14,5])', bestSum(300, [7, 14, 5]));
console.log('bestSum(1000, [7,14])', bestSum(1000, [7, 14]));
