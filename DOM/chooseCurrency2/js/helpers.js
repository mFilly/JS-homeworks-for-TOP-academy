/* helpers.js */
export const getSelectedCurrencies = () => {
	const currencies = document.querySelectorAll(".active")
	return [...currencies].map(currency => currency.textContent)
};