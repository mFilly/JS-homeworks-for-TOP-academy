/**
 * @param {Object[]} user
 * @param {string} user[].firstName
 * @param {string} user[].lastName
 * @param {number} user[].age
 */
function getFormattedFullName(user) {
  return user.firstName + " " + user.lastName.toUpperCase() // your code
}

// Sample usage - do not modify
let user1 = {
  firstName: "Sam",
  lastName: "Doe",
  age: 20
};

let user2 = {
  firstName: "Charlie",
  lastName: "Fort",
  age: 31
};

console.log(getFormattedFullName(user1)); // "Sam DOE"
console.log(getFormattedFullName(user2)); // "Charlie FORT"