// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/**
 * @description Solution 1
 * @param  {string} str
 */
function reverse(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

/**
 * @description Solution 2
 * @param  {string} str
 */
function reverse_2(str) {
  let reverseStr = "";

  for (let char of str) {
    reverseStr = char + reverseStr;
  }
  return reverseStr;
}

function reverse_3(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

module.exports = { reverse, reverse_2, reverse_3 };
