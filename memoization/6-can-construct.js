const canConstruct = (targetWord, wordBank, memo = {}) => {
  if (targetWord in memo) return memo[targetWord];
  if (!targetWord.length) return true;

  for (const word of wordBank) {
    if (targetWord.startsWith(word)) {
      const result = canConstruct(
        targetWord.slice(word.length),
        wordBank,
        memo
      );
      if (result) {
        memo[targetWord] = true;
        return true;
      }
    }
  }

  memo[targetWord] = false;
  return false;
};

// Complexity
// Brute Force
// Time: O(n^m * m)
// Space: O(m^2)
//
// Memoization
// Time: O(n * m^2)
// Space: O(m^2)

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(
  canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
);
console.log(
  canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])
);
console.log(
  canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
  ])
);
