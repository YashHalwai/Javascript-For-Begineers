let a = prompt("Hey whats your Age?")
a = Number.parseInt(a) // Converting the String to a number
// console.log(typeof a);

// if(a < 0)
// {
//   alert("This is a invalid Age.")
// }
// else if(a < 9)
// {
//   alert("You are a kid and you cannot even think of driving.")
// }
// else if(a >= 9 && a < 18)
// {
//   alert("You are a kid and you can even think of driving after 18.")
// }

// else
// {
//   alert("You can drive as you are above 18.")
// }
// console.log("Done...")

// Ternary Operator - - >

console.log("You can", a < 18? "not drive" : "drive")