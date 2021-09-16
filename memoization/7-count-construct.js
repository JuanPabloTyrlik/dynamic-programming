const countConstruct = (targetWord, wordBank, memo = {}) => {
  if (targetWord in memo) return memo[targetWord];
  if (!targetWord.length) return 1;

  let total = 0;

  for (const word of wordBank) {
    if (targetWord.startsWith(word)) {
      const result = countConstruct(
        targetWord.slice(word.length),
        wordBank,
        memo
      );
      if (result) {
        total += result;
      }
    }
  }

  memo[targetWord] = total;
  return total;
};

// Complexity
// Brute Force
// Time: O(n^m * m)
// Space: O(m^2)
//
// Memoization
// Time: O(n*m^2)
// Space: O(m^2)

console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(
  countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
);
console.log(
  countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])
);
console.log(
  countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
  ])
);
