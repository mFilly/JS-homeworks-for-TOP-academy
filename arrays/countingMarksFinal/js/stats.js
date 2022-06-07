/* stats.js */

/**
 * @param {array} grades
 * @param {number} grade
 */
export function addGrade(grades, grade) {
	grades.push(grade)
	return grades // your code
}

/**
 * @param {array} grades
 */
export function getNumberOfGrades(grades) {
	return grades.length // your code
}

/**
 * @param {array} grades
 */
export function getFirstGrade(grades) {
	return grades[0]// your code
}

/**
 * @param {array} grades
 */
export function getLastGrade(grades) {
	return grades[grades.length - 1]// your code
}

/**
 * @param {array} grades
 */
export function getSumOfGrades(grades) {
	return grades.reduce(function (total, current) {
		return total + current
	}, 0)// your code
}

/**
 * @param {array} grades
 */
export function getAverageGrade(grades) {
	let sum = grades.reduce(function (total, current) {
		return total + current
	}, 0)
	return sum / grades.length  
}        // your code


/**
 * @param {array} grades
 */
export function getRaisedGrades(grades) {
	return grades.join(",")    // your code
}