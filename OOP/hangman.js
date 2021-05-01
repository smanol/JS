// 1. Set up the word instance property as an array of lower case letters
// 2. Set up another instance property to store quessed letters
// 3. Create a method that gives you the word puzzle back

const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.guessedLetter = ['a', 'l', 'n', 'j', 'e'] 
    this.remainingGuesses = remainingGuesses
}

Hangman.prototype.getPuzzle = function() {
    let puzzle = ""
    this.word.forEach((letter)=>{
        this.guessedLetter.includes(letter) || letter === " "? puzzle += letter: puzzle += "*"
    })
    return puzzle
}


const game1 = new Hangman('Cat', 2)
console.log(game1)

const game2 = new Hangman('New Jersey', 4)
console.log(game2)

console.log(game2.getPuzzle())