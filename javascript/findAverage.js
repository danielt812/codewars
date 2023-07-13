// Write a function that accepts two parameters (sum and multiply) and find two numbers [x, y], where x + y = sum and x * y = multiply.

import { assert } from "chai";

const findAverage = (arr) => arr.reduce((acc, cur) => acc + cur, 0) / arr.length || 0;

describe("findAverage Basic tests", () => {
  it("Expected value: 1", () => {
    assert.strictEqual(findAverage([1, 1, 1]), 1);
  });
  it("Expected value: 2", () => {
    assert.strictEqual(findAverage([1, 2, 3]), 2);
  });
  it("Expected value: 2", () => {
    assert.strictEqual(findAverage([1, 2, 3]), 2);
  });
  it("Expected value: 0", () => {
    assert.strictEqual(findAverage([]), 2);
  });
});
