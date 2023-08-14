// https://www.codewars.com/kata/5467e4d82edf8bbf40000155

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

import { assert } from "chai";

const descendingOrder = (num) => parseInt(num .toString() .split("") .sort((a, b) => b - a) .join(""));

describe("descendingOrder basic tests", () => {
	assert.strictEqual(descendingOrder(0), 0);
	it("Expected value: 1", () => {
		assert.strictEqual(descendingOrder(1), 1);
	});
	it("Expected value: 111", () => {
		assert.strictEqual(descendingOrder(111), 111);
	});
	it("Expected value: 51", () => {
		assert.strictEqual(descendingOrder(15), 51);
	});
	it("Expected value: 2110", () => {
		assert.strictEqual(descendingOrder(1021), 2110);
	});
	it("Expected value: 987654321", () => {
		assert.strictEqual(descendingOrder(123456789), 987654321);
	});
});
