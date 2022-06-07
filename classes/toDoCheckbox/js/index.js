/* index.js */

import Item from "./item.js";
import Checkbox from "./checkbox.js";

// class usage
let item = new Item("Learn Javascript", false);
console.log(item.getFormatted());

let checkbox = new Checkbox("Vacuum the floor", true);
console.log(checkbox.getFormatted());
checkbox.check();
console.log(checkbox); // isCompleted should be true now