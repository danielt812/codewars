// https://www.codewars.com/kata/56e2f59fb2ed128081001328/train/javascript

// Input: Array of elements
// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.
// "h,o,l,a"

import { assert } from "chai";

const printArray = (arr) => arr.join(",");

describe("commaDelimeters basic tests", () => {
	it(`["h","o","l","a"] Expected value: "h,o,l,a"`, () => {
		assert.deepEqual(printArray(["h", "o", "l", "a"]), "h,o,l,a");
	});
});
