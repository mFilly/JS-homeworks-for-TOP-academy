/* name-variations.js */

export default class NameVariations {
	/** @param {string} name */
	constructor(firstName) {
		this.firstName = firstName
	}

	getNumberOfChars() {
		return this.firstName.length;
	}

	getLower() {
		return this.firstName.toLowerCase();
	}

	getUpper() {
		return this.firstName.toUpperCase();
	}
}