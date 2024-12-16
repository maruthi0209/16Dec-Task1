// Question 1
/**
 * Write an arrow function that takes two parameters, a and b, and returns their sum
 */
let myFunc1 = (a , b) => a + b;


// Question 2
/**
 * Create an arrow function that takes a single parameter name and returns a greeting message: “Hello, {name}!”
 */
let myFunc2 = name => `Hello, ${name}!`;


// Question 3
/**
 * Write an arrow function that checks if a number is even and returns true if it is, or false otherwise.
 */
let myFun3 = num => (num % 2)? true : false;


// Question 4
/**
 * Write an arrow function that accepts a number and returns true if the number is greater than 10, or false otherwise.
 */
let myFun4 = num => (num > 10)? true : false;


// Question 5
/**
 * Create an arrow function that takes two strings, compares their lengths, and returns the longer string. 
 * If both have the same length, return “Equal length.”
 */
var myFun5 = (a , b) => {
    if(a.length > b.length) {
        return a
    } else if (a.length < b.length) {
        return b
    } else {
        return "Equal length"
    }
};
// the above can also be written as
var myFun5 = (a , b) => {(a.length > b.length) ? a : (a.length < b.length) ? b : "Equal length."}; 