/* item.js */

export default class Item {
	constructor(title, isCompleted) {
	  this.title = title;
	  this.isCompleted = isCompleted;
	}
  
	getFormatted() {
	  let status = "";
	  if (this.isCompleted) {
		status = "✅";
	  } else {
		status = "⏳";
	  }
	  return `${status} ${this.title}`;
	}
  }