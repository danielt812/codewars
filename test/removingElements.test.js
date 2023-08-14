// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

import { assert } from "chai";

const removeEveryOther = (arr) => arr.filter((_, i) => i % 2 === 0);

describe("Removing Elements basic tests", () => {
  it(`Expected value: ["Hello", "Hello Again"] `, () => {
    assert.deepEqual(removeEveryOther(["Hello", "Goodbye", "Hello Again"]), ["Hello", "Hello Again"]);
  });
  it(`Expected value: [1, 3, 5, 7, 9]`, () => {
    assert.deepEqual(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 3, 5, 7, 9]);
  });
  it(`Expected value: [[1, 2]]`, () => {
    assert.deepEqual(removeEveryOther([[1, 2]]), [[1, 2]]);
  });
  it(`Expected value: [["Goodbye"]]`, () => {
    assert.deepEqual(removeEveryOther([["Goodbye"], { Great: "Job" }]), [["Goodbye"]]);
  });
});
