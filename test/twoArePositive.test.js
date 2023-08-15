// https://www.codewars.com/kata/602db3215c22df000e8544f0/train/javascript

// Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly two of of the three integers are positive numbers (greater than zero), and False - otherwise.

import { assert } from "chai";

const twoArePositive = (a, b, c) => ([a, b, c].filter((num) => num > 0).length == 2 ? true : false);

describe("twoArePositive basic tests", () => {
	it(`(2, 4, -3) Expected: true`, () => {
		assert.strictEqual(twoArePositive(2, 4, -3), true);
	});

	it(`(-4, 4, 0) Expected: true`, () => {
		assert.strictEqual(twoArePositive(-4, 4, 0), false);
	});

	it(`(2, 4, -3) Expected: true`, () => {
		assert.strictEqual(twoArePositive(4, 6, 0), true);
	});
});
