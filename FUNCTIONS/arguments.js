// Multiple arguments

let add = function(a, b, c, d) {
    
    return a + b + c

}

let result = add(11,22,33)
console.log(result)


// Default arguments

let getScoreText = function(name = 'Anonymous', score = 0) {
    return "Name: " + name + " - Score: " + score  

}

let scoreText = getScoreText(undefined, 90)
console.log(scoreText)


// Chalenge Area
// total, tipPercent


let calculateTip = function (total, tipPercent = 0.2) {
    return total * tipPercent
}


let tip = calculateTip(100)
console.log(tip)