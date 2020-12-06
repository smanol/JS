// const notes = ['Note 1', 'Note 2', 'Note 3']

// // console.log(notes.pop())
// // notes.push('My new note!')

// // console.log(notes.shift())
// // notes.unshift('First Note!')


// // Splice !!
// // Start in the index of one and remove one item
// // notes.splice(1,1)


// // Start in the index of one remove one item and add anohter
// // notes.splice(1,1,"Second Note!!!")

// // Start in the index of 2 remove none and add one 
// // notes.splice(2,0,"In between!")
// // Changing values using bracket notation

// notes[2] = 'This is now the new note 3'

// notes.forEach(function(a, b, c, d) {
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(d)

// })

// // console.log(notes.length)
// // console.log(notes)

// // notes[1] = notes[1] + ' Important'
// // console.log(notes[notes.length-2])
// // console.log(notes[6])

// // for (let count = 0; count <= 2; count++) {
// //     console.log(count)
// // }

// // for (let count = 2; count >=0 ; count--) {
// //     console.log(count)
// // }

// // for (let count = 0; count < notes.length; count ++) {
// //     console.log(notes[count])
// // }


// for (let count = notes.length; count >= 0; count--) {
//     console.log(notes[count])
// }

// console.log(notes.indexOf('note 1'))


const notes = [
    // {},
    {
        title: 'My Next', 
        body: 'I would like to go to Spain'},
    {
        title: 'Habbits to work on',
        body: 'Exercise. Eating a bit better'
    },
    {
        title: 'Office modifications',
        body: 'Get a new seat'
    }

]


const findNote = function(notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

// }
// const findNote = function(notes, noteTitle) {
//     const index = notes.findIndex(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]

// }
// console.log(notes)
// console.log(notes.length)

// let someObject = {}
// let otherObject = someObject

// console.log(someObject === otherObject)

// const index = notes.findIndex(function(note, index) {
//     console.log(note)
//     return note.title === 'Habbits to work on' 
// })
// console.log(index)

// /* Filtering Arrays */

// const note = findNote(notes,'office modifications')
// console.log(note)

// const filteredNotes = notes.filter(function(note, index){
//     const string = "office"
//     const isTitleMatch = note.title.toLowerCase().includes(string.toLowerCase())
//     const isBodyMatch = note.body.toLowerCase().includes(string.toLowerCase())
//     return isTitleMatch || isBodyMatch
// })
// console.log(filteredNotes)

// const findNotes = function(notes, string) {
//     return notes.filter(function(note){
//         const isTitleMatch = note.title.toLowerCase().includes(string.toLowerCase())
//         const isBodyMatch = note.body.toLowerCase().includes(string.toLowerCase())
//         return isTitleMatch || isBodyMatch
//     }) 
    
// }


// console.log("I found " ,findNotes(notes, "eating"))



const sortNotes = function(notes){
    notes.sort(function(a, b){
        if (a.title.toLowerCase() < b.title.toLowerCase() ) {
            return -1
        }
        else if (a.title.toLowerCase() > b.title.toLowerCase()){
            return 1
        }
        else {
            return 0
        }
    })
}

sortNotes(notes)
console.log(notes)