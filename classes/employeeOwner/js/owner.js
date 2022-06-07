/* owner.js */

import Employee from "./employee.js";

export default class Owner extends Employee {
    getPosition() {
        return `${this.firstName} ${this.lastName} is the owner`;
      }
}