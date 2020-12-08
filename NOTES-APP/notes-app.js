
let notes = []

const filters = {
    searchText: ''
}

// Check for existing saved data
const notesJSON = localStorage.getItem('notes')
if (notesJSON != null) {
    notes = JSON.parse(notesJSON)
}




const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = '<h3>Text</h3>'

    
    filteredNotes.forEach(function(note){
        const noteElem = document.createElement('p') 

        if (note.title.lenth > 0) {
            noteElem.textContent = note.title
        } else {
            noteElem.textContent = "Unnamed note"
        }

        
        document.querySelector('#notes').appendChild(noteElem)
    })
    
}


const ps = document.querySelectorAll('p')


renderNotes(notes,filters)

document.querySelector('#create-note').addEventListener('click', function(e){
    notes.push({
        title: '',
        body: ''
    })
    localStorage.setItem('notes', JSON.stringify(notes))
    renderNotes(notes, filters)
})

document.querySelector('#search-text').addEventListener('input', function(e){
//   console.log(e.target.value) 
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function(e){
    console.log(e.target.value)
})