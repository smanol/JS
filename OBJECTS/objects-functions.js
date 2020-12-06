let myBook = {
	title: '1984',
	author: 'George Orwell',
	pageCount: 326
}

let otherBook = {
	title: 'A Peoples History',
	author: 'Howard Zinn',
	pages: 723
}

// let getSummary = function(book) {
	
// 	console.log(`${book.title} by ${book.author}`)

// }


let getSummary = function(book) {
	return {
		summary: `${book.title} by ${book.author}`,
		pageCountSummary: `${book.title} is ${book.pageCount} pages long`
	}
}


let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)


//Challenge are
//Create function - take fahrenheit in - return objets with all three
// Fahrenheit to Celsius Tc = (Tf - 32) * 5 / 9
// Fahrenheit to Kelvin Tk = (Tf + 459.67) * 5 / 9
//

let getTemperatures = function(Tf) {
	return {
		Tf: Tf, 
		Tc: (Tf - 32) * (5 / 9),
		Tk: (Tf + 459.67) * (5 / 9)
	}
}

console.log(getTemperatures(74))

let modifyBook = function(book) {

	book.author = "Sir " + book.author
	console.log(book.author)

}

modifyBook(myBook)
console.log(myBook.author)