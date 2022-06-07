/**
 * @param {name: String, grade: Number[]} grades
 */
// способ 1
//function getSumGrades(grades) {
//     let sum = 0

//     grades.forEach(function (item) {
//         sum = sum + item.grade
//     })

//     return sum
// }

function getSumGrades(grades) {
	return grades.reduce(function(total, current){
        return total+current.grade
    },0 )
}

// Sample usage - do not modify
let grades = [
    {
        name: "Sam Blue",
        grade: 14
    },
    {
        name: "Charlie Bron",
        grade: 16
    }
];
console.log(getSumGrades(grades)); // 30