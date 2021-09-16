const howSum = (target, numbers, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;

  for (let num of numbers) {
    const remainder = target - num;
    const result = howSum(remainder, numbers, memo);
    if (result) {
      memo[target] = [num, ...result];
      return memo[target];
    }
  }

  memo[target] = null;
  return null;
};

// Complexity
// Brute Force
// Time: O(n^m * m)
// Space: O(m)
//
// Memoization
// Time: O(n * m^2)
// Space: O(m^2)

console.log('howSum(7, [2,3,4])', howSum(7, [2, 3, 4]));
console.log('howSum(8, [3,4])', howSum(8, [3, 4]));
console.log('howSum(15, [2,3,4])', howSum(15, [2, 3, 4]));
console.log('howSum(300, [7,14,5])', howSum(300, [7, 14, 5]));
console.log('howSum(1000, [7,14])', howSum(1000, [7, 14]));
