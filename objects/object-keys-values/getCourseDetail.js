/**
 * @param {Object} course
 * @param {number} user.id
 * @param {string} user.name
 * @param {number} user.year
 * @param {string} detail
 */
 const getCourseDetail = (course, detail) => {
    console.log(`the course ${detail} is ${course[detail]}`);
	return `the course ${detail} is ${course[detail]}`;
}


// Sample usage - do not modify
getCourseDetail({ id: 1, name: "Learn JS", year: 2022 }, "name"); // "The course name is Learn JS"
getCourseDetail({ id: 1, name: "Learn JS", year: 2022 }, "year"); // "The course year is 2022"