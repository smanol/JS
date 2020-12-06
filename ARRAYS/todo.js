// //Create an array with 5 different TODO's
// //You have x TODO's (Where x is the lenght of the array)
// //Print the first and second to last items -> Todo: walk the dog
// const todos = ['Finish Lessons', 'Meditate', 'Wear socks', 'Make Bed', 'Drink Watter']

// // Delete the third item
// // Add a new item onto the end
// // Remove the first item from the list

// todos.splice(2,1)
// todos.push("Whatch the play")
// todos.shift()


// console.log(`You have ${todos.length} todos.`)
// // console.log(`Todo #2: ${todos[1]}`)
// // console.log(`Todo #${todos.length - 1}: ${todos[todos.length-2]}`)
// // console.log(todos)


// // Array Method that uses callbacks
// todos.forEach(function(item, index) { //Callback function
//     console.log(`${index+1}. ${item}`)
// })


// // for (let count = 0; count < todos.length; count++) {
// //     const num = count + 1
// //     const todo = todos[count]
// //     console.log(`${num}. ${todo}`)
// // }

const todos = 
[
 {text: 'Order cat food', completed: false},
 {text: 'Clean kitchen',  completed: true},
 {text: 'Buy food',  completed: true},
 {text: 'Do work',  completed: false},
 {text: 'Exercise', completed: true},
]
// 1. Convert array to array of objects => text,  completed 
// 2. Create a function to remove a todo by text value

// const deleteTodo = (todos, text) => {
//     const index = todos.findIndex( function(todo){
//         return todo.text.toLowerCase() === text.toLowerCase()
//     })

//     if (index != -1) {
//         todos.splice(index,1)
//     }
    
// }

// const getThingsToDo = function(todos) {
//     return todos.filter(function(todo){
//         return !todo.completed
//     })
// }

// console.log(getThingsToDo(todos))

// deleteTodo(todos, 'buy d food')
// console.log(todos)


const sortTodos = function(todos) {

    todos.sort(function(a, b){
        if  (a.completed < b.completed) {
            return -1
        }

        else if (a.completed == b.completed) {
            return 0
        }
        else return 1

    })

}


const sortTodos2 = function(todos) {
    todos.sort( function(a,b) {
        if (!a.completed && b.completed){
            return -1
        } else if (!b.completed && a.completed){
            return 1
        } else {
            return 0
        }
    })

}

sortTodos2(todos)
console.log(todos)