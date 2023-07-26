// https://www.codewars.com/kata/56a3f08aa9a6cc9b75000023/train/javascript
// Write a simple regex to validate a username. Allowed characters are:
// lowercase letters,
// numbers,
// underscore
// Length should be between 4 and 16 characters (both included).

import { assert } from 'chai';
import { it } from 'mocha';

const validateUsr = (username) => /^[a-z0-9_]{4,16}$/.test(username);

describe('usernameRegex Basic tests', () => {
	it('asddsa - Expected value: true', () => {
		assert.strictEqual(validateUsr('asddsa'), true);
	});
	it('a - Expected value: false', () => {
		assert.strictEqual(validateUsr('a'), false);
	});
	it('Hass - Expected value: false', () => {
		assert.strictEqual(validateUsr('Hass'), false);
	});
	it('Hass_12assssssssasasasas - Expected value: false', () => {
		assert.strictEqual(validateUsr('Hass_12assssssssasasasas'), false);
	});
	it('"" - Expected value: false', () => {
		assert.strictEqual(validateUsr(''), false);
	});
	it('____ - Expected value: false', () => {
		assert.strictEqual(validateUsr('012'), false);
	});
	it('p1pp1 - Expected value: true', () => {
		assert.strictEqual(validateUsr('p1pp1'), true);
	});
	it('asd43 34 - Expected value: false', () => {
		assert.strictEqual(validateUsr('asd43 34'), false);
	});
	it('asd43_34 - Expected value: true', () => {
		assert.strictEqual(validateUsr('asd43_34'), true);
	});
});
