/* index.js */
import User from "./user.js";

class Writer extends User{

publishArticle() {
    console.log("article published");
}
}


// do not modify
let user = new User('Sam', 'Smith', 30);
console.log(user); // User {firstName: 'Sam', lastName: 'Smith', age: 30}

let writer = new Writer('Tom', 'Roth', 20);
console.log(writer); // Writer {firstName: 'Tom', lastName: 'Roth', age: 20}
console.log(writer.publishArticle()); // Article published