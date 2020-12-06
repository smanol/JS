let num = 103.941

console.log(num.toFixed(1))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))


let max = 1
let min = 0
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

console.log(randomNum) 

// Chalenge Area
// 1 - 5 - true if correct - false if not correct

let makeGuess = function(guess) {
	let min = 1
	let max = 5
	let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
	return randomNumber	=== guess

}


