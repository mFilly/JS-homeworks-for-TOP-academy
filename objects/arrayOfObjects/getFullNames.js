/**
 * @param {{firstName: String, lastName: String, age: Number}[]} users
 */
 function getFullNames(users) {
	return users.map(function(user){
        return `${user.firstName} ${user.lastName}`
    })
}

let users = [
  {
    firstName: "Sam",
    lastName: "Blue",
    age: 21,
  },
  {
    firstName: "Charlie",
    lastName: "Bon",
    age: 38,
  }
];
console.log(getFullNames(users)); // [Sam Blue, Charlie Bon]