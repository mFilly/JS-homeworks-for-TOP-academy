/* passport.js */

export default class Passport {
	/**
	 * @param {string} firstName
	 * @param {string} lastName
	 */
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	getFirstName() {
		return this.firstName.toLowerCase();
	}

	getLastName() {
		return this.lastName.toUpperCase();
	}

	getFullName() {
		//лезет ошибка
		//return `${this.firstName[0].toUpperCase()}${this.firstName.slice(1)} ${this.lastName[0].toUpperCase()}${this.lastName.slice(1)}`
		return `${this.firstName} ${this.lastName}`;
	}

	getInitials() {
		return `${this.firstName[0]}.${this.lastName[0]}.`.toUpperCase();
	}

	getIsValidName() {
		if (this.firstName.length >= 1 && this.lastName.length >= 1 && this.lastName[this.lastName.length-1]!==".") {
			return "yes"
		}
		return "no"
	}
}