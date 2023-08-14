// https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript

// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

import { assert } from "chai";

const capitals = (word) =>
  word
    .split("")
    .map((l, i) => (/[A-Z]/.test(l) ? i : null))
    .filter((l) => l != null);

describe("findCapitals Basic tests", () => {
  it("Expected value: [0,3,4,6]", () => {
    assert.deepEqual(capitals("CodEWaRs"), [0, 3, 4, 6]);
  });
  it("Expected value: [0,3,4,6]", () => {
    assert.deepEqual(capitals("HelLo"), [0, 3]);
  });
  it("Expected value: [0,3,4,6]", () => {
    assert.deepEqual(capitals("wORlD"), [1, 2, 4]);
  });
});
