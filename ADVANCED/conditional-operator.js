// const myAge = 17
// const message = myAge >= 18 ? 'You can vote!' : 'You cannot vote.'
// console.log(message)

// const myAge = 20
// const showPage = () => 'Showing the page'
// const showErrorPage = () => 'Showing the error page'

// const message = myAge >= 21 ? showPage() : showErrorPage()
// console.log(message)

const team = ['Tyler', 'Porter', 'Stamatis', 'George', 'Andrew']
// 1. Print "Team size: 3" if less than or equal to 4
// 2. Print "Too many people on your team" otherwise

const message = team.length <= 4 ? `Team size: ${team.length}` : "Too many people on your team"
console.log(message)