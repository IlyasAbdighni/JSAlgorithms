const { isPalinDrome_1, isPalinDrome_2 } = require("./index");

test("palindrome function 1 is defined", () => {
  expect(isPalinDrome_1).toBeDefined();
});

test("Given string is a palindrome", () => {
  expect(isPalinDrome_1("abba")).toEqual(true);
});

test("Given string is a palindrome", () => {
  expect(isPalinDrome_1("abbag")).toEqual(false);
});

test("palindrome function 2 is defined", () => {
  expect(isPalinDrome_2).toBeDefined();
});

test("Given string is a palindrome", () => {
  expect(isPalinDrome_2("abba")).toEqual(true);
});

test("Given string is a palindrome", () => {
  expect(isPalinDrome_2("abbag")).toEqual(false);
});
