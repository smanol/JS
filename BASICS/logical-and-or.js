let temp = 55

// if (temp>=60){
//     if (temp<=90){
// //         console.log("It is really nice outside!")
// //     }
// // }

// // Logical And Operator - True if both sides are true. False if otherwise
// // Logical Or Operator - True if at least one side is true. False if otherwise
// if (temp >= 60 && temp<= 90) {
//     console.log("It is pretty nice outside!!")
// } else if (temp <= 0 || temp >=110) {
//     console.log('Do not go outside')
// } else {
//     console.log("Eh. Do what you want")
// }
// // Chalenge Area

let isGuestOneVegan = false;
let isGuestTwoVegan = false;

// Are both Vegan - Only offer up vegan dishes.
// At least one Vegan - Make sure to offer up sSome vegan options
// Else, Offer up anything on the menu.


if (isGuestOneVegan && isGuestTwoVegan) {
    console.log("Only offer up vegan dishes")
}
else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log("Make sure to offer up some vegan options")
}
else {
    console.log("Offer up anything on the menu")
}


