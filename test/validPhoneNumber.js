// https://www.codewars.com/kata/525f47c79f2f25a4db000025/train/javascript

// Write a function that accepts a string, and returns true if it is in the form of a phone number.
// Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

// Only worry about the following format:
// (123) 456-7890 (don't forget the space after the close parentheses)

import { assert } from "chai";

const validPhoneNumber = (num) => /^\(\d{3}\)\s\d{3}-\d{4}$/.test(num);

describe(`validPhoneNumber basic tests`, () => {
  it(`(123) 456-7890 Expected value: true`, () => {
    assert.strictEqual(validPhoneNumber("(123) 456-7890"), true);
  });
  it(`(1111)555 2345 Expected value: false`, () => {
    assert.strictEqual(validPhoneNumber("(1111)555 2345"), false);
  });
  it(`(098) 123 4567 Expected value: false`, () => {
    assert.strictEqual(validPhoneNumber("(098) 123 4567"), false);
  });
});
