// https://www.codewars.com/kata/53af2b8861023f1d88000832/train/javascript

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

import { assert } from "chai";

const areYouPlayingBanjo = (name) => (/[rR]/.test(name[0]) ? `${name} plays banjo` : `${name} does not play banjo`);

describe("areYouPlayingBanjo basic tests", () => {
	it("Expected result: Raul plays banjo", () => {
		assert.strictEqual(areYouPlayingBanjo("Raul"), "Raul plays banjo");
	});
	it("Expected result: Paula plays banjo", () => {
		assert.strictEqual(areYouPlayingBanjo("Paula"), "Paula does not play banjo");
	});
});
