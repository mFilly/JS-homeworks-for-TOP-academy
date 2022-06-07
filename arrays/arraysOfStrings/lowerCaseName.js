/**
 * @param {string[]} names
 */
function lowerCaseNames(names) {
    return names.map(function (name) {
        return name.toLowerCase()
    })
}

// Sample usage - do not modify
console.log(lowerCaseNames(["Addison", "Blake", "Sam", "August"])) // ["addison", "blake", "sam", "august"]
console.log(lowerCaseNames(["SAM", "AlEx", "CHARLIE"])) // ["sam", "alex", "charlie"]