// Chapter 1 - - > Practice Set

// Q1) Create a variable of type string and try to add numbers to it =>

let a = "Harry"
let b = 6
console.log(a + b)

// Q2) Use typeof operator to find the datatype of the string in last question =>

console.log(typeof(a+b))

// Q3) Create a const object in javascript. Can you change it to hold a number later => NO

const a1 = 
{
  name : "Harry",
  section : 1,
  isPrincipal : false
}

// a1 = 1000

// Q4) Try to add a new key to the const object in problem 3 were you able to do it =>

// a1 = {}

a1['friend'] = "Shubham"
a1['name'] = "Lovish"

console.log(a1)

// Q5) Write a JS program to create a word meaning dictionary of 5 words =>

const dict =
  {
    a : "apple",
    b : "bat",
    c : "cat",
    d : "dog",
    e : "elephant"
  }

console.log(dict)