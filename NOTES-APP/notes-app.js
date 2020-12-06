/* console.log("This is from a different file") */

// DOM - Document Object Model
const notes = [
    // {},
    {
        title: 'My Next',
        body: 'I would like to go to Spain'
    },
    {
        title: 'Habbits to work on',
        body: 'Exercise. Eating a bit better'
    },
    {
        title: 'Office modifications',
        body: 'Get a new seat'
    }

]

const filters = {
    searchText: ''
}

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = '<h3>Text</h3>'

    
    filteredNotes.forEach(function(note){
        const noteElem = document.createElement('p') 
        noteElem.textContent = note.title
        document.querySelector('#notes').appendChild(noteElem)
    })
    
}

// const p = document.querySelector('p')
// console.log(p)
// p.remove()

const ps = document.querySelectorAll('p')
// ps.forEach(function(p){
//     p.textContent = "**************" //3
//     //2 console.log(p.textContent)
//     //1 p.remove()
// })
// /* Add a new element */
// const newParagraph = document.createElement('p')

// newParagraph.textContent = "This is a new element from JavaScrip"

// document.querySelector("body").appendChild(newParagraph)


// document.querySelector('button').addEventListener('click', function(e) {
//     e.target.textContent = "The button was clicked"
// })
// document.querySelectorAll('button')[1].addEventListener('click', function(e) {
//     console.log('Deleted All Notes')
// })

renderNotes(notes,filters)

document.querySelector('#create-note').addEventListener('click', function(e){
    e.target.textContent = 'The button was CLICKED!'
})

document.querySelector('#search-text').addEventListener('input', function(e){
//   console.log(e.target.value) 
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function(e){
    console.log(e.target.value)
})