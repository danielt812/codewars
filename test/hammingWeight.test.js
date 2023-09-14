// https://www.codewars.com/kata/5519e930cd82ff8a9a000216/train/javascript

// The Hamming weight of a string is the number of symbols that are different from the zero-symbol of the alphabet used. There are several algorithms for efficient computing of the Hamming weight for numbers. In this Kata, speaking technically, you have to find out the number of '1' bits in a binary representation of a number.

import { assert } from "chai";

const hammingWeight = (num) => (num > 0 ? num.toString(2).match(/1/g).length : 0);

describe("hammingWeight basic tests", () => {
	it("Expected result: 2", () => {
		assert.strictEqual(hammingWeight(10), 2);
	});
	it("Expected result: 3", () => {
		assert.strictEqual(hammingWeight(21), 3);
	});
});
