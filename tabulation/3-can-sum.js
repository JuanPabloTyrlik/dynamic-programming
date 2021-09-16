const canSum = (target, numbers) => {
  const table = new Array(target + 1).fill(false);
  table[0] = true;

  for (let i = 0; i < table.length; i++) {
    if (table[i]) {
      for (const num of numbers) {
        if (i + num < table.length) table[i + num] = true;
      }
    }
  }

  return table[target];
};

// Complexity
// Tabulation
// Time: O(n*m)
// Space: O(m)

console.log('canSum(7, [2,3,4])', canSum(7, [2, 3, 4]));
console.log('canSum(8, [3,4])', canSum(8, [3, 4]));
console.log('canSum(15, [2,3,4])', canSum(15, [2, 3, 4]));
console.log('canSum(300, [7,14])', canSum(300, [7, 14]));
console.log('canSum(1000, [7,14])', canSum(1000, [7, 14]));
