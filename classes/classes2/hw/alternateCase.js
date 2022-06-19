//Alternate case
//Напишите функцию alternateCase,которая переключает каждую буквув
//строкесверхней на нижнююиснижней на верхнюю.
//Examples:Hello World->hELLO WORLD
//преобразовала строку в массив, затем создала новый массив из букв с противоположным
// регистром с помощью метода map и условия if else, затем вернула все в форму строки с помощью join  

const alternateCase = strings => {
    let newArray = strings.split("");
    return (newArray.map(string => {
        if (string === string.toUpperCase()) {
            return string.toLowerCase()
        } else if (string === string.toLowerCase()) {
            return string.toUpperCase()
        }
    }
    )).join("");
}

console.log(alternateCase("Hello World"));
console.log(alternateCase("ITS me mARIO"));

