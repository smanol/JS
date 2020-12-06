let name = 'Stamatios Manoliadis'

//length property
console.log(name.length)


//convert to upper case

console.log(name.toUpperCase())

//convert to lower case
console.log(name.toLowerCase())

const sentence = 'The quick brown fox jumps over the lazy dog';

const word = 'fox';

console.log(`The word "${word}" ${sentence.includes(word)? 'is':'is not'} in the sentence`)

//Includes method
let password = 'abc123pasdfdfword0987'
console.log(password.includes('password'))


//Trim
let str = "   hello  "
str = str.trim()

console.log(str)


// Challenge Area

/// isValidPassword
// true if legnth > 8 and it does not contain the word password

let isValidPassword = function(password) {
	passwordTrim = password.trim()

	return passwordTrim.length >= 9 && 
			!passwordTrim.includes("password") 
}

console.log(isValidPassword('lsdkf'))
console.log(isValidPassword('lsasdfasd32423dkf'))
console.log(isValidPassword('lsasdf323423dkf'))
console.log(isValidPassword('lsdasdfaspasswordkf'))









