// https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.

import { assert } from "chai";

const arrayDiff = (a, b) => a.filter((e) => !b.includes(e));

describe("arrayDiff Basic tests", () => {
	it("Expected value: [2]", () => {
		assert.deepEqual(arrayDiff([1, 2], [1]), [2], "a was [1,2], b was [1]");
	});
	it("Expected value: [2, 2]", () => {
		assert.deepEqual(arrayDiff([1, 2, 2], [1]), [2, 2], "a was [1,2,2], b was [1]");
	});
	it("Expected value: [1]", () => {
		assert.deepEqual(arrayDiff([1, 2, 2], [2]), [1], "a was [1,2,2], b was [2]");
	});
	it("Expected value: [1, 2, 2]", () => {
		assert.deepEqual(arrayDiff([1, 2, 2], []), [1, 2, 2], "a was [1,2,2], b was []");
	});
	it("Expected value: []", () => {
		assert.deepEqual(arrayDiff([], [1, 2]), [], "a was [], b was [1,2]");
	});
	it("Expected value: [3]", () => {
		assert.deepEqual(arrayDiff([1, 2, 3], [1, 2]), [3], "a was [1,2,3], b was [1,2]");
	});
});
