// define classes here
class User {
    constructor (name, surname,age){
        this.name=name;
        this.surname=surname;
        this.age=age;
    }
    canVote() {
        return this.age>=18;
    }
    getFullName(){
        return this.name+ " "+this.surname;
    }
}

class Admin extends User {
    getFullName(){
        return this.name+ " "+this.surname+" " +"[admin]";
    }
    updateConfig(){
        return "config updated"
    }
}

// Sample usage - do not modify
const user = new User("Sam", "Green", 17);
console.log(user.canVote()); // false
console.log(user.getFullName()); // "Sam Green"

const admin = new Admin("Alex", "Blue", 20);
console.log(admin.canVote()); // true
console.log(admin.getFullName()); // "Alex Blue [admin]"
console.log(admin.updateConfig()); // "Config updated"