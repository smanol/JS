var title = 'Time is valuable' + ' and precious'
console.log(title)

var pipe = 'string'
var condition = 'happy'
console.log(`This is a template ${pipe} I am very ${condition}`)

let getScoreText = function( name = 'Anonymous', score = 0) {
	return `Name: ${name} - Score: ${score}`
}

console.log(getScoreText('Stamatis'))

/*
let getTip = function(total, tipPercent = 0.2) {
	let percent = tipPercent * 100
	let tip = total * tipPercent
	return `A ${percent}% tip on $${total} would be $${tip}.`
}
*/

let getTip = function(total, tipPercent = 0.2) {
	return `A ${tipPercent * 100}% on $${total} would be $${tipPercent * total}.`
}

console.log(getTip(100))

console.log(getTip(100, 0.4))

console.log(getTip(200, 0.5))