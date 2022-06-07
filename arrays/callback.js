/**
 * @param {array} grades
 */
function sumGradesAbove10(grades) {
    let sum = 0
    grades.forEach(function (grades) {
        if (grades >= 10) {
            sum = sum + grades
        }
    })
    return console.log(sum);
}

// Sample usage - do not modify
sumGradesAbove10([10, 5, 18, 3, 14, 19, 9]) // 61
sumGradesAbove10([18, 4, 9, 20, 8]) // 38