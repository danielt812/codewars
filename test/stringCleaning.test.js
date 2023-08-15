// https://www.codewars.com/kata/57e1e61ba396b3727c000251
// Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

import { assert } from "chai";

const stringClean = (str) => str.replaceAll(/\d/g, "");

describe(`stringCleaning basic tests`, () => {
	it(`! ! Expected value: "! !"`, () => {
		assert.strictEqual(stringClean("! !"), "! !");
	});
	it(`(E3at m2e2!!) Expected value: "(Eat me!!)"`, () => {
		assert.strictEqual(stringClean("(E3at m2e2!!)"), "(Eat me!!)");
	});
	it(`Dsa32 cdsc34232 csa!!! 1I 4Am cool! Expected value: "Dsa cdsc csa!!! I Am cool!"`, () => {
		assert.strictEqual(stringClean("Dsa32 cdsc34232 csa!!! 1I 4Am cool!"), "Dsa cdsc csa!!! I Am cool!");
	});
});
