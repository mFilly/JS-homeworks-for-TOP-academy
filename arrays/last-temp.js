/**
 * @param {array} temperatures
 */
function getLastTemperatureMessage(temperatures) {
    return `the last temperature is at position ${temperatures.length - 1} `// your code
}

// Sample usage - do not modify
console.log(getLastTemperatureMessage([-5, 12, 15])) // "The last temperature is at position 2"
console.log(getLastTemperatureMessage([13, 10])) // "The last temperature is at position 1"