// https://www.codewars.com/kata/55147ff29cd40b43c600058b

// Given a string, you progressively need to concatenate the first letter from the left and the first letter to the right and "1", then the second letter from the left and the second letter to the right and "2", and so on.

import { assert } from "chai";

const charConcat = (str) => {
	const arr = str.split("");
	let count = 1;
	let result = "";
	while (arr.length > 1) {
		result += arr.shift() + arr.pop() + count++;
	}
	return result;
};

describe("charConcat Basic tests", () => {
	it("Expected value: af1be2cd3", () => {
		assert.strictEqual(charConcat("abc def"), "af1be2cd3");
	});
	it("Expected value: cs1or2da3ew4", () => {
		assert.strictEqual(charConcat("codewars"), "cs1or2da3ew4");
	});
});
