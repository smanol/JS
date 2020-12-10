// Fetch existing todos from localStorage
const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos')
    if (todosJSON != null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

// Save todos to localStorage
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Render application todos based on filters
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
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

    filteredTodos.forEach(function (todo) {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}

//  1. Setup a root div
//  2. Setup and append a checkbox (set type attribute)
//  someNode.setAttribute('type', 'chechbox')
//  3. Setup and append a span text (set text)
//  4. Setup and append a button (set text)


// Get the DOM elements for an individual note

const generateTodoDOM = function (todo) {

    // Creating the div element
    const todoEl = document.createElement('div')
    
    // Creating and assigning the checkbox (input with attribute type=checkbox)
    const checkEl = document.createElement('input')
    todoEl.appendChild(checkEl)
    checkEl.setAttribute('type', 'checkbox')
    
    // Creating and assigning the span paragraph element
    const span = document.createElement('span')
    span.textContent = todo.text
    todoEl.appendChild(span)
    
    // Creating and assigning the button 
    const button = document.createElement('button')
    button.textContent = 'x'
    todoEl.appendChild(button)

    // Returning the div Element
    return todoEl
    
}
// Get the DOM elements for the list summary

const generateSummaryDOM = function (incompleteTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary 
}


