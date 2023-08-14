// https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/javascript

// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element.

import { assert } from "chai";

const addLength = (str) => str.split(" ").map((s) => s + " " + s.length);

describe(`evenOrOdd basic tests`, () => {
  it(`Expected value: ["apple 5", "ban 3"]`, () => {
    assert.deepEqual(addLength("apple ban"), ["apple 5", "ban 3"]);
  });
});
