// @ts-check

// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/**
 * @param {string} str
 * @return {boolean}
 */

function isPalinDrome_1(str) {
  let reversedStr = str
    .split("")
    .reverse()
    .join("");
  return reversedStr === str;
}

/**
 *
 * @param {string} str
 * @return {boolean}
 */
function isPalinDrome_2(str) {
  return str.split("").every((el, i, arr) => {
    return el === arr[arr.length - i - 1];
  });
  return false;
}

module.exports = { isPalinDrome_1, isPalinDrome_2 };
