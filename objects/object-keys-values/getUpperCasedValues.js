/**
 * @param {Object} course
 * @param {string} [course.name]
 * @param {number} [course.year]
 */
 const getUpperCasedValues = course => {
	return Object.values(course).map(item => item.toUpperCase())
}

// Sample usage - do not modify
console.log(getUpperCasedValues({ name: "Learn JS" })); // ["LEARN JS"]
console.log(getUpperCasedValues({ name: "Learn JS", category: "Programming" })); // ["LEARN JS", "PROGRAMMING"]
console.log(getUpperCasedValues({})); // []