/* index.js */
import User from "./user.js";

// Class usage
let user = new User("Sam", "Doe");
console.log(user);
console.log(user.getFullName());
console.log(user.canVote());
console.log(user.hasVoted());