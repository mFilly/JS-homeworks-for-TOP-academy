/**
 * @param {Object[]} user
 * @param {string} user[].firstName
 * @param {string} user[].lastName
 * @param {number} user[].age
 */
function getIntials(user) {
    return user.firstName[0] + user.lastName[0] // your code
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

console.log(getIntials(user1)); // "SD"
console.log(getIntials(user2)); // "CF"