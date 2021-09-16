const howSum = (targetSum, numbers) => {
  const table = new Array(targetSum + 1).fill(null);
  table[0] = [];

  for (let i = 0; i < table.length; i++) {
    if (table[i]) {
      for (const num of numbers) {
        if (i + num < table.length) {
          table[i + num] = [...table[i], num];
          if (i + num === targetSum) return table[targetSum]; // Early exit, we need any way to reach the targetSum
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

console.log('howSum(7, [2,3,4])', howSum(7, [2, 3, 4]));
console.log('howSum(7, [5,3,4])', howSum(7, [5, 3, 4]));
console.log('howSum(8, [3,4])', howSum(8, [3, 4]));
console.log('howSum(15, [2,3,4])', howSum(15, [2, 3, 4]));
console.log('howSum(300, [7,14,5])', howSum(300, [7, 14, 5]));
console.log('howSum(1000, [7,14])', howSum(1000, [7, 14]));
