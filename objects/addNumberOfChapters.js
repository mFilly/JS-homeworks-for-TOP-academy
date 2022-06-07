/**
 * @param {Object[]} course
 * @param {number} count
 */
 function addNumberOfChapters(course, count) {
   course.addNumberOfChapters=count
   console.log(course);
   return course
     // your code
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
  
  addNumberOfChapters(course1, 80); // { name: 'Learn English', isCompleted: true, numberOfChapters: 80 }
  addNumberOfChapters(course2, 60); // { name: 'Learn JavaScript', isCompleted: false, numberOfChapters: 60 }