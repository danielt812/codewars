// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921
// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

import { assert } from "chai";

const findAverage = (arr) => arr.reduce((acc, cur) => acc + cur, 0) / arr.length || 0;

describe("findAverage Basic tests", () => {
	it(`[1, 1, 1] - Expected value: 1`, () => {
		assert.strictEqual(findAverage([1, 1, 1]), 1);
	});

	it(`Expected value: 2`, () => {
		assert.strictEqual(findAverage([1, 2, 3]), 2);
	});

	it(`Expected value: 2`, () => {
		assert.strictEqual(findAverage([1, 2, 3]), 2);
	});

	it(`Expected value: 0`, () => {
		assert.strictEqual(findAverage([]), 0);
	});
});
