// https://www.codewars.com/kata/5639bdcef2f9b06ce800005b/train/javascript

// In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.

import { assert } from "chai";

const makeString = (s) => s.split(" ").map(str => str[0]).join("");

describe("returnFirstChar basic tests", () => {
  it("Expected value: sexy", () => {
    assert.strictEqual(makeString("sees eyes xray yoat"), "sexy");
  })
  it("Expected value: bean", () => {
    assert.strictEqual(makeString("brown eyes are nice"), "bean");
  })
})
