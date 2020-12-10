
let todos = getSavedTodos()

let clickedTimes = 0

const filters = {
    searchText: "",
    hideCompleted: false
}

renderTodos(todos, filters)

document.querySelector('#search-input').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)

})

document.querySelector("#new-todo").addEventListener('submit', function (e) {
    e.preventDefault()
    todos.push({
        id: uuidv4(), 
        text: e.target.elements.text.value,
        completed: false
    })
    saveTodos(todos)
    renderTodos(todos, filters)
    e.target.text.value = ""

})

document.querySelector("#hide-completed").addEventListener('change', function (e) {

    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})


