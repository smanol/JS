
// Read existing notes from local storage
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('papper')
    try {
        return notesJSON ? JSON.parse(notesJSON) : []
    } catch (e) {
        return []
    }
}

const getSavedContainer = () => {
    const containerJSON = localStorage.getItem('container')
    try {
        return containerJSON ? JSON.parse(containerJSON) : []
    } catch (e) {
        return []
    }
}

const renderNotes = (notes, filters) => {
    const filteredNotes = notes.filter((note) => {

        

        return filters.filenames.some((filename) => {
            return note.filename.toLowerCase().includes(filename.toLowerCase().trim())
        }) &&
            filters.comments.some((comment) => {
                return note.comment.toLowerCase().includes(comment.toLowerCase().trim())
            }) &&
            filters.originals.some((original) => {
                return note.comment.toLowerCase().includes(original.toLowerCase().trim())
            }) &&
            filters.hashtags.some((tag) => {
                return note.hashtags.some((hashtag) => {
                    return hashtag.toLowerCase().includes(tag.toLowerCase().trim())
            })

            })
        // note.hashtags.toLowerCase().includes(filters.hashtags.toLowerCase())

    })
    document.querySelector('#table_body').innerHTML = ''
    document.querySelector('#sources').innerHTML = ''

    filteredNotes.forEach((note) => {
        // const noteEl = generateNoteDOM(note)
        // document.querySelector('#table_body').appendChild(noteEl)

        const SourceEl = generateSourceNoteDOM(note)
        document.querySelector('#sources').appendChild(SourceEl)

    })

}



// const generateNoteDOM = (note) => {
//     const noteEl = document.createElement('tr')
//     const fileEl = document.createElement('td')
//     const commentEl = document.createElement('td')
//     const originalEl = document.createElement('td')
//     const hashtagEl = document.createElement('td')

//     // Setup the note title text

//     fileEl.textContent = note.filename
//     commentEl.textContent = note.comment
//     originalEl.textContent =  note.original
//     hashtagEl.textContent = note.hashtags

//     noteEl.appendChild(fileEl)
//     noteEl.appendChild(commentEl)
//     noteEl.appendChild(originalEl)
//     noteEl.appendChild(hashtagEl)

//     return noteEl
// }


const generateSourceNoteDOM = (note) => {
    
    const noteEl = document.createElement('p')


    comment = note.comment.trim().replace(/\.$/, "");

    tags = ''

    note.hashtags.forEach((tag) => {
        tags = tags.concat(`<a>#${tag}</a> `)
    })

    // hashtagEl.textContent = note.hashtags
    // console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`)

    noteEl.innerHTML = `<span title= '${note.original}'>
                        ${comment} </span>
                        (${note.filename}).
                        
                        <br>
                        ${tags}
                        `

    noteEl.classList.add("draggable")
    noteEl.id = note.id
    noteEl.draggable = true

    return noteEl
}


//Save the notes to localStorage
const saveNotes = (notes) => localStorage.setItem('notes', JSON.stringify(notes))
