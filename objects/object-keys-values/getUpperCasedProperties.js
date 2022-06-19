/**
 * @param {Object} course
 * @param {number} [course.id]
 * @param {string} [course.name]
 * @param {number} [course.year]
 */
 const getUpperCasedProperties = course => {
	console.log(Object.keys(course).map(item => item.toUpperCase()));
    return Object.keys(course).map(item => item.toUpperCase())
}

// Sample usage - do not modify
getUpperCasedProperties({ id: 1, name: "Learn JS", year: 2022 }); // ["ID", "NAME", "YEAR"]
getUpperCasedProperties({ name: "Learn JS", category: "Programming" }); // ["NAME", "CATEGORY"]
getUpperCasedProperties({}); // []