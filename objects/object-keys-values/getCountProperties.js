/**
 * @param {Object} course
 * @param {number} [course.id]
 * @param {string} [course.name]
 * @param {number} [course.year]
 * @param {number} [course.category]
 */
 const getCountProperties = course => {
    console.log(Object.keys(course).length);
	return Object.keys(course).length;
}

// Sample usage - do not modify
getCountProperties({ id: 1, name: "Learn JS", year: 2022, category: "Programming" }); // 4
getCountProperties({ name: "Learn JS", category: "Programming" }); // 2
getCountProperties({}); // 0