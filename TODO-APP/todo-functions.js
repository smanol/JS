'use strict'

// Fetch existing todos from localStorage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')
    try {
        return todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        return []
    }
}

// Save todos to localStorage
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Render application todos based on filters
const renderTodos = (todos, filters) => {
    const filteredTodos = todos.filter((todo) => {
        searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        hideCompletedMatch = !filters.hideCompleted || !todo.completed
        
        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)

    document.querySelector('#todos').innerHTML = ''

    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

    filteredTodos.forEach((todo) => {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}

const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)  
    if (todo) {
        todo.completed = !todo.completed
    }
}

const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    console.log(todoIndex)
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}
// Get the DOM elements for an individual note

const generateTodoDOM = (todo) => {

    // Creating the div element
    const todoEl = document.createElement('div')
    
    // Creating and assigning the checkbox (input with attribute type=checkbox)
    const checkEl = document.createElement('input')
    checkEl.setAttribute('type', 'checkbox')
    console.log(todo.completed + " " + todo.text)
    checkEl.checked = todo.completed
    checkEl.addEventListener('change', () => {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos,filters)
    })
    todoEl.appendChild(checkEl)
    
    // Creating and assigning the span paragraph element
    const span = document.createElement('span')
    span.textContent = todo.text
    todoEl.appendChild(span)
    
    // Creating and assigning the button 
    const button = document.createElement('button')
    button.textContent = 'x'
    button.addEventListener('click', () => {
        console.log(todo.id)
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    todoEl.appendChild(button)

    // Returning the div Element
    return todoEl
    
}
// Get the DOM elements for the list summary

const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary 
}


