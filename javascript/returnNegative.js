// https://www.codewars.com/kata/55685cd7ad70877c23000102
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

import { assert } from "chai";

const makeNegative = (num) => (num < 0 ? num : -num);

describe("makeNegative Basic tests", () => {
  it("Expected value: -1", () => {
    assert.deepStrictEqual(makeNegative(1), -1);
  });
  it("Expected value: -5", () => {
    assert.deepStrictEqual(makeNegative(-5), -5);
  });
  it("Expected value: 0", () => {
    assert.deepStrictEqual(makeNegative(0), 0);
  });
  it("Expected value: -1", () => {
    assert.deepStrictEqual(makeNegative(0.12), -0.12);
  });
});
