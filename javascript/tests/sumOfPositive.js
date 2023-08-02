// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
// You get an array of numbers, return the sum of all of the positives ones.

import { assert } from "chai";

const positiveSum = (arr) => (arr.length ? arr.filter((n) => n >= 0).reduce((p, c) => p + c, 0) : 0);

describe("sumOfPositive basic tests", () => {
	it("Expected value: 15", () => {
		assert.strictEqual(positiveSum([1, 2, 3, 4, 5]), 15);
	});
	it("Expected value: 12", () => {
		assert.strictEqual(positiveSum([1, -2, 3, 4, 5]), 13);
	});
	it("Expected value: 15", () => {
		assert.strictEqual(positiveSum([]), 0);
	});
	it("Expected value: 15", () => {
		assert.strictEqual(positiveSum([-1, -2, -3, -4, -5]), 0);
	});
	it("Expected value: 15", () => {
		assert.strictEqual(positiveSum([-1, 2, 3, 4, -5]), 9);
	});
});
