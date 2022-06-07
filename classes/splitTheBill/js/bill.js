/* bill.js */

export default class Bill {
	constructor() {
		this.amounts = [];
	}

	/** @param {string} amountStr */
	addAmount(amountStr) {
		amountStr = Number.parseInt(amountStr, 10);
		this.amounts.push(amountStr);
		console.log(this.amounts);
		return this.amount;
	}

	getCount() {
		return this.amounts.length;
	}

	getTotal() {
		return this.amounts.reduce(function (total, current) {
			return total + current
		}, 0)
	}

	getAverage() {
		return this.amounts.reduce(function (total, current) {
			return total + current
		}, 0) / this.amounts.length
	}
}