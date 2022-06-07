/**
 * @param {string[]} characters
 * @param {string} char
 */
 function hasCharacterBeenUsed(characters, char) {
	return characters.includes(char)// your code
}

// Sample usage - do not modify
console.log(hasCharacterBeenUsed(["A", "B", "C", "D"], "A")) // true
console.log(hasCharacterBeenUsed(["A", "B", "C", "D"], "F")) // false
console.log(hasCharacterBeenUsed(["A", "B"], "B")) // true
console.log(hasCharacterBeenUsed(["A", "B"], "C")) // false