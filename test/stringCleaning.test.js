// https://www.codewars.com/kata/57e1e61ba396b3727c000251
// Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

import { assert } from "chai";

const stringClean = (str) => str.replaceAll(/\d/g, "");

describe(`stringCleaning basic tests`, () => {
	it(`Expected value: ""`, () => {
		assert.strictEqual(stringClean(""), "");
	});
	it(`Expected value: "! !"`, () => {
		assert.strictEqual(stringClean("! !"), "! !");
	});
	it(`Expected value: ""`, () => {
		assert.strictEqual(stringClean("123456789"), "");
	});
	it(`Expected value: ""`, () => {
		assert.strictEqual(stringClean("(E3at m2e2!!)"), "(Eat me!!)");
	});
	it(`Expected value: ""`, () => {
		assert.strictEqual(stringClean("Dsa32 cdsc34232 csa!!! 1I 4Am cool!"), "Dsa cdsc csa!!! I Am cool!");
	});
	it(`Expected value: ""`, () => {
		assert.strictEqual(stringClean("A1 A1! AAA   3J4K5L@!!!"), "A A! AAA   JKL@!!!");
	});
	it(`Expected value: ""`, () => {
		assert.strictEqual(stringClean("Adgre2321 A1sad! A2A3A4 fv3fdv3J544K5L@"), "Adgre Asad! AAA fvfdvJKL@");
	});
	it(`Expected value: ""`, () => {
		assert.strictEqual(
			stringClean("Ad2dsad3ds21 A  1$$s122ad! A2A3Ae24 f44K5L@222222 "),
			"Addsadds A  $$sad! AAAe fKL@ "
		);
	});
});
