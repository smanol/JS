'use strict'

let notes = getSavedNotes()

const filters = {
    filenames: [''],
    comments: [''],
    originals: [''],
    hashtags: [''],
    sortBy: 'byEdited'
}


document.querySelector('#fileUpload').addEventListener('change', (e) => {
    handleFileUpload(e)
    renderNotes(notes, filters)

}, false);


renderNotes(notes, filters)

document.querySelector('#search-filenames').addEventListener('input', (e) => {
    filters.filenames = e.target.value.split(",")
    console.log(filters.filenames[0])
    renderNotes(notes, filters)
})

document.querySelector('#search-comments').addEventListener('input', (e) => {
    filters.comments = e.target.value.split(",")
    renderNotes(notes, filters)
})
document.querySelector('#search-originals').addEventListener('input', (e) => {
    filters.originals = e.target.value.split(",")
    renderNotes(notes, filters)
})
document.querySelector('#search-hashtags').addEventListener('input', (e) => {
    filters.hashtags = e.target.value.split(",")
    console.log(filters.hashtags)
    renderNotes(notes, filters)
})
