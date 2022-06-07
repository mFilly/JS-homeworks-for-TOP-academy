/**
 * @param {array} grades
 */
 function convertToString(grades) {
	return grades.join("&")// your code
}

// Sample usage - do not modify
console.log(convertToString([10, 15, 13, 19])) // "10 & 15 & 13 & 19"
console.log(convertToString([7, 13, 20, 15])) // "7 & 13 & 20 & 15"