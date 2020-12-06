// Function - input, code, output

let greetUser = function () {
    console.log("Hello there User! How are you?")
}

greetUser()


let square = function(number) {
    let result = number * number
    return result

}

let value = square(8)
let otherValue = square(2)

console.log(value)
console.log(otherValue)
console.log(otherValue)

// Chalenge Area
// convertFahrenheitToCelsius

//Call a couple of times (32 -> 0) (68 -> 20)

let convertFahrenheitToCelsius = function(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9
    return celsius
}

let convertFahrenheitToCelsius32 = convertFahrenheitToCelsius(32)
let convertFahrenheitToCelsius68 = convertFahrenheitToCelsius(68)

console.log(convertFahrenheitToCelsius32)
console.log(convertFahrenheitToCelsius68)

