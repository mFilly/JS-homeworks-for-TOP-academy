/* index.js */
import Person from "./person.js";

/**
 * @param {string} fName
 * @param {string} lName
 */
const createPerson = (fName, lName) => {
    return new Person (fName, lName);
};

// Sample usage - do not modify
console.log(createPerson("Sam", "Doe")); // Person {firstName: 'Sam', lastName: 'Doe'}
console.log(createPerson("Charlie", "Green")); // Person {firstName: 'Charlie', lastName: 'Green'}