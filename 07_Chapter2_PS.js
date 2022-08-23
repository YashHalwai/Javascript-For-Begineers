// Chapter Set 2

// Q1) Use logical operators to find whether the age of a person lies betweeen 10 & 20 -->
/*
let age = prompt("What is your age?")
if(age > 10 && age < 20)
{
  console.log("Your age lies between 10 & 20")
}
else
{
  console.log("Your age doesn't lies between 10 & 20")
}
*/

// Q2) Demonstrate the use of switch case statements in JS -->
/*
let age = prompt("What is your age?")
age = Number.parseInt(age)
switch(age)
  {
    case 12:
      console.log("Your age is 12")
      break
    case 13:
      console.log("Your age is 13")
      break
    case 14:
      console.log("Your age is 14")
      break
    case 15:
      console.log("Your age is 15")
      break
    case 16:
      console.log("Your age is 16")  
      break
    default:
      console.log("Your age is not special")
  }
*/

// Q3) Write a JS program to find whether a number is divisible by 2 & 3 -->
/*
let number = prompt("Enter the number: ")
number = Number.parseInt(number)

if(number % 2 == 0 && number % 3 == 0)
{
  console.log("Your number is divisible by 2 & 3")
}
else
{
  console.log("Your number is not divisible by 2 & 3")
}
*/

// Q3) Write a JS program to find whether a number is divisible by either 2 or 3 -->
/*
let number = prompt("Enter the number: ")
number = Number.parseInt(number)

if(number % 2 == 0 || number % 3 == 0)
{
  console.log("Your number is divisible by 2 or 3")
}
else
{
  console.log("Your number is not divisible by 2 or 3")
}
*/

// Q4) Print "You can Drive" or "You can not drive" based on age being greater than 18 using ternary operator -->
/*
let age = prompt("What is your age?")
age = Number.parseInt(age)

a = age > 18 ? "You can drive" : "You can not drive"

console.log(a)
*/