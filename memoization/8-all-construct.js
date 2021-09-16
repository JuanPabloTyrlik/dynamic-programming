const allConstruct = (targetWord, wordBank, memo = {}) => {
  if (targetWord in memo) return memo[targetWord];
  if (!targetWord.length) return [[]];

  let possibleCombinations = [];

  for (const word of wordBank) {
    if (targetWord.startsWith(word)) {
      const suffix = targetWord.slice(word.length);
      const combinations = allConstruct(suffix, wordBank, memo);
      possibleCombinations.push(
        ...combinations.map((combination) => [word, ...combination])
      );
    }
  }

  memo[targetWord] = possibleCombinations;
  return possibleCombinations;
};

// Complexity
// Brute Force
// Time: O(n^m)
// Space: O(m)
//
// Memoization (Faster on better cases but not in the worst possible case [many combinations])
// Time: O(n*m)
// Space: O(m)

console.log(
  allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c'])
);
console.log(
  allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
);
console.log(
  allConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])
);
console.log(
  allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
  ])
);
