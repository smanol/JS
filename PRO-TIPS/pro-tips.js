const m1 = { name: 'tim', age: 37, nervous:false}
const m2 = { name: 'tam', age: 27, nervous:true}
const m3 = { name: 'tom', age: 15, nervous:true}
const m4 = { name: 'stam', age: 30, nervous:false}

// Bad Code
console.log(m1)
console.log(m2)
console.log(m3)
console.log(m4)

// Good Code

console.log('%c My friends', 'color: purple; font-weight: bold')
console.log({m1, m2, m3, m4})


console.table([m1, m2, m3, m4])


//Time

console.time('looper')
let i = 0 ;
while (i<1000000) {i++}
console.timeEnd('looper')

//Stach Trace Logs

const deleteMe = () => console.trace('bye bye database')
deleteMe()
deleteMe()


// Destructuring

const turtle = {
    name: 'Bob 🐢', 
    legs: 4, 
    shell: true,
    type: 'amphibious',
    meal: 10,
    diet: 'berries'
}

// Bad Code 💩

function feed(animal) {
    return `Feed ${animal.name} ${animal.meal} kilos of ${animal.diet}`;
}

// Good Code

function feed(animal) {
    const {name, meal, diet} = animal
    return `Feed ${name} ${meal} kilos of ${diet}`
}
console.log(feed(turtle))

function feed({name, meal, diet}){
    return `Feed ${name} ${meal} kilos of ${diet}`
}

console.log(feed(turtle))

//https://www.youtube.com/watch?v=Mus_vwhTCq0&ab_channel=Fireship