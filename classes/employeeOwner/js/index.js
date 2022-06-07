/* index.js */

import Employee from "./employee.js";
import Owner from "./owner.js";

// class usage
let sam = new Employee("Sam", "Blue", "marketing");
console.log(sam.getFullName());
console.log(sam.getPosition());

let charley = new Owner("Charley", "Doe", "owner");
console.log(charley.getFullName());
console.log(charley.getPosition());