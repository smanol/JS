// 1. Delete Dummy Data
// 2. Read and parse the data when the app starts up
// 3. Stringify and write the data when new data is added

let todos = []

const todosJSON = localStorage.getItem('todos')
if (todosJSON != null) {
    todos = JSON.parse(todosJSON)
}



let clickedTimes = 0
const filters = {
    searchText: "",
    hideCompleted: false
}

let incompleteTodos = 0
const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase()) 
        hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })


    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''

    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(summary)

    filteredTodos.forEach(function (todo) {
        const p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector('#todos').appendChild(p)
    })
}

renderTodos(todos, filters)



document.querySelector('#search-input').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderTodos(todos, filters)

})



document.querySelector("#new-todo").addEventListener('submit', function(e){
    e.preventDefault()
    todos.push({
        text:e.target.elements.text.value, 
        completed:false
    })
    localStorage.setItem('todos', JSON.stringify(todos))
    renderTodos(todos, filters)
    e.target.text.value = ""

})

document.querySelector("#hide-completed").addEventListener('change', function(e){

    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})


//1. Create a checkbox and setup event listener -> "Hide completed"
//2. Create new hideCompleted filter (default false)
//3. Update hideCombpleted and rerender list on checkbox change
//4. Setup renderTodos to remove completed items
