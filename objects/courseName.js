/**
 * @param {Object[]} course
 * @param {string} course[].name
 * @param {boolean} course[].isCompleted
 */
 function getCourseName(course) {
    return course.name// your code
  }
  
  // Sample usage - do not modify
  let course1 = {
    name: "Learn English",
    isCompleted: true
  };
  
  let course2 = {
    name: "Learn JavaScript",
    isCompleted: false
  };
  
  console.log(getCourseName(course1)); // "Learn English"
  console.log(getCourseName(course2)); // "Learn JavaScript"