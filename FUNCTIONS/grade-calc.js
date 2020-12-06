// students scoree, total possible score
// 15/20 -> You got a C (75%) !
// A 90 - 100, B 80 - 89, C 70 - 79, D 60 - 69, F 0 - 59

let calcGrade = function(score, total) {
    let percent = score / total * 100
    let grade
    if (percent >= 90) {
        grade = 'A'
    } else if (percent >= 80) {
        grade = 'B'
    } else if (percent >= 70) {
        grade = 'C'
    } else if (percent >= 60) {
        grade = 'D'
    } else {
        grade = 'F'
    }

    return ` You got a ${grade} (${percent}%)!`
}


let test1 = calcGrade(10,20)
let test2 = calcGrade(14,20)
let test3 = calcGrade(16,20)
let test4 = calcGrade(18,20)
let test5 = calcGrade(17,20)


console.log(test1)
console.log(test2)
console.log(test3)
console.log(test4)
console.log(test5)