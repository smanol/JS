const square = num => num * num

const squareLong = (num) => {
    return num * num
}

console.log(square(9))

const people = [
    {
        name: 'Andrew',
        age: 28
    },
    {
        name: 'Stam',
        age: 30
    },
    {
        name: 'Jess',
        age: 22
    }

]



const under30 = people.filter((person) => person.age < 30)

console.log(under30)
// 1. Find the person with age 22
// 2. Print that persons name

const age22 = people.find((person) => person.age === 22)
console.log(age22.name)