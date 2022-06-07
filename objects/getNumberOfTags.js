/**
 * @param {Object} game
 * @param {string} game.name
 * @param {string[]} game.tags
 * @param {number} game.releaseYear
 */
 function getNumberOfTags(game) {
     console.log(game.tags.length);
	return game.tags.length// your code
}

// Sample usage - do not modify
let game = {
  name: "Risk",
  tags: ["Strategy", "War", "Family friendly", "nnn"],
  releaseYear: 1957
};

getNumberOfTags(game);