const canSum = (target, numbers, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return true;
  if (target < 0) return false;

  for (let num of numbers) {
    const remainder = target - num;
    memo[target] = canSum(remainder, numbers, memo);
    if (memo[target]) {
      return memo[target];
    }
  }

  memo[target] = false;
  return memo[target];
};

// Complexity
// Brute Force
// Time: O(n^m)
// Space: O(m)
//
// Memoization
// Time: O(n*m)
// Space: O(m)

console.log('canSum(7, [2,3,4])', canSum(7, [2, 3, 4]));
console.log('canSum(8, [3,4])', canSum(8, [3, 4]));
console.log('canSum(15, [2,3,4])', canSum(15, [2, 3, 4]));
console.log('canSum(300, [7,14])', canSum(300, [7, 14]));
console.log('canSum(1000, [7,14])', canSum(1000, [7, 14]));
