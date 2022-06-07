/**
 * @param {Object} tweet
 */
function getFullName(tweet) {
    return tweet.author.details.firstName + " " +tweet.author.details.lastName // your code
}

// Sample usage - do not modify
let tweet = {
    id: 1080733626234937,
    message: `I just launched https://developer.mozilla.org
	👉 Resources for developers, by developers
	👉 Web technology for developers
	👉 Modern JavaScript & best practices
	👉 Documentation for Web developers`,
    link: "https://developer.mozilla.org",
    created_at: "2029-01-03 11:46:00",
    author: {
        id: 111834593,
        details: {
            firstName: "Alex",
            lastName: "Smith"
        },
        handle: "ASmith"
    }
};
console.log(getFullName(tweet)); // "Alex Smith"