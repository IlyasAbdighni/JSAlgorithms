const { reverse, reverse_2, reverse_3 } = require("./index");

test("Reverse function exists", () => {
  expect(reverse).toBeDefined();
});

test("Reverse a given string: ", () => {
  expect(reverse("abcd")).toEqual("dcba");
});

test("Reverses a given string: ", () => {
  expect(reverse("    abc")).toEqual("cba    ");
});

test("Reverse: solution 2 exsits", () => {
  expect(reverse_2).toBeDefined();
});

test("Reverse a given string: ", () => {
  expect(reverse_2("abcd")).toEqual("dcba");
});

test("Reverses a given string: ", () => {
  expect(reverse_2("    abc")).toEqual("cba    ");
});

test("Reverse: solution 3 exsits", () => {
  expect(reverse_3).toBeDefined();
});

test("Reverse a given string: ", () => {
  expect(reverse_3("abcd")).toEqual("dcba");
});

test("Reverses a given string: ", () => {
  expect(reverse_3("    abc")).toEqual("cba    ");
});
