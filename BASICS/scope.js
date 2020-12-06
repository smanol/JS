//Lexical Scope (Static Scope)
//Global Scope - Defined outside of all code blocks
//Local Scope - Defined inside a code block

//In a scope you can access variables defined in that scope, or in any parent/ancestor scope.

//Global Scope (varOne)
    //Local Scope (varTwo)
        //Local Scope (varFour)
    //Local Scope (varThree)


let var1 = 'var1'

if (true) {
    console.log(var1)
    var1 = 'varOne'
    let var2 = 'var2'
    console.log(var2)

    if (true) {
        let var4 = 'var4'
    }
}


if (true) {
    let var3 = 'var3'
}

// console.log(var2)
console.log(var1)
