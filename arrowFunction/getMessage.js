/**
 * @param {string} message
 */
 const getMessage = message => {
	if (message.endsWith(".")) {
        return message
    }
    return message + "."
}

// Sample usage - do not modify
console.log(getMessage("Hello world")); // "Hello world."
console.log(getMessage("Welcome home.")); // "Welcome home."
console.log(getMessage("Yes. Correct")); // "Yes. Correct."