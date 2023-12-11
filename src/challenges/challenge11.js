function getIndexsForPalindrome(word) {
  const swaps = [];
  const lastIndex = word.length - 1;
  const midIndex = Math.ceil(word.length / 2);

  for (const i of new Array(midIndex).keys()) {
    const j = lastIndex - i;

    if (word[i] !== word[j]) {
      swaps.push({
        index: i,
        found: word[i],
        expect: word[j],
      });
    }
  }

  const firstSwap = swaps.shift();
  const secondSwap = swaps.shift();

  let result;

  if (!firstSwap) {
    result = [];
  } else if (swaps.length > 0) {
    result = null;
  } else if (
    firstSwap.found === secondSwap?.expect &&
    firstSwap.expect === secondSwap?.found
  ) {
    result = [firstSwap.index, secondSwap.index];
  } else if (word.length % 2 === 1 && firstSwap.found === word[midIndex - 1]) {
    result = [midIndex - 1, lastIndex - firstSwap.index];
  } else if (word.length % 2 === 1 && firstSwap.expect === word[midIndex - 1]) {
    result = [firstSwap.index, midIndex - 1];
  } else {
    result = null;
  }

  return result;
}

console.log(getIndexsForPalindrome("anna"));

console.log(getIndexsForPalindrome("abab"));

console.log(getIndexsForPalindrome("abac"));

console.log(getIndexsForPalindrome("aaaaaaaa"));

console.log(getIndexsForPalindrome("aaababa"));

console.log(getIndexsForPalindrome("caababa"));
