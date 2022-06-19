/**
 * @param {Object} course
 * @param {number} [course.id]
 * @param {string} [course.name]
 * @param {number} [course.year]
 */
 const visualizeEntries = course => {
	return Object.entries(course)
}

// Sample usage - do not modify
console.log(visualizeEntries({id: 1, name: "Learn JS", year: 2022})); // [ [ 'id', 1 ], [ 'name', 'Learn JS' ], [ 'year', 2022 ] ]
console.log(visualizeEntries({name: "Learn JS", category: "Programming"})); // [ [ 'name', 'Learn JS' ], [ 'category', 'Programming' ] ]
console.log(visualizeEntries({})); // []