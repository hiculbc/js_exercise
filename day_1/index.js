
// ******** Conditions ***********


// 1. write a condition that return true for == but not for ==== 

let a1 = '10';

console.log(a1 == 10);
console.log(a1 === 10);

/*
Basically , == the equality comparision converts the elements into requrired datatypes 
and then compare , 
where as === this equality just compares with out any coversion, which results in type checking along with value checking
*/

// 2. condition true for x>=10 and x is even or x is less than 10 and odd

let a2 = 10;

if((a2>=10 && !(a2%2)) || (a2<10 && a2%2))
{
    console.log("TRUE");
}
else 
console.log("FALSE");

console.log(!10);

// 3. give odd or even by using ternary operator

let a3 = 4;

let output = a3%2?"odd":"even";

console.log(output);

// 4. print days based on values(1-7) using if-else

let a4 = 9, day4 = "";

if(a4  == 0) {
    day4 = "Sunday";
}
else if(a4  == 1) {
    day4 = "Monday";
}
else if(a4  == 2) {
    day4  = "Tuesday";
}
else if(a4  == 3) {
    day4 = "Wednesday";
}
else if(a4  == 4) {
    day4 = "Thursday";
}
else if(a4 == 5) {
    day4 = "Friday";
}
else if(a4 == 6) {
    day4 = "Saturday"
}
else {
    day4 = "Invalid Input";
}

console.log(day4);

// 5. above question using switch case

let a5 = 0,day5 = "";

switch(a5){
    case 0 : day5 = "Sunday";break;
    case 1 : day5 = "Monday";break;
    case 2 : day5 = "Tuesday";break;
    case 3 : day5 = "Wednesday";break;
    case 4 : day5 = "Friday";break;
    case 5 : day5 = "Saturday";break;
    default : day5 = "Invalid input";
 }

 console.log(day5);

// ******* Functions ***********

// 1. Diff between Function declaration and Function Expression

/* 
Basically Function declaration is the prototype which contains the name,body of the function
it enjoys the hoisting freedom and is invoked by calling its reference.
As the name suggests, it is the declaration , so it is not expression , more like a statement

When coming to Function expression, it is an expression like (2 + 3) or so
can be given to any variable and can be used again and again with that variable name
it doesn't have a name, won't enjoys hoisting , can be written in switch,if,while statements as 
it is an expression.
But declarations must not be in block scope they should be in global scope

*/

// 2. syntax rules of arrow function 

/*
 arrow function is basically the simplified version of anonymous function or 
 function expression, without function keyword.
 -> should start with a parenthesis to have any arguments 
 -> then '=>' symbol to write a body 
 -> if you include your body in flower parenthesis, you have to use return 
    keyword explicitly to return something
 -> if you don't use flower parenthesis , automatically the body is returned 
 -> remember to use flower parenthesis if there is more than one line in body
*/

// 3.function to add numbers 

function add(a,b){
    return a+b;
}

console.log(add(2,3));

// 4. function expression to multiply two numbers 

let multiply = function (a,b){
    return a*b;
}

console.log(multiply(2,3));

// 5. arrow function to subtract two numbers 

let substract = (a,b) => a - b;

console.log(substract(2,3));

// 6. IIFE  to accept a string and return a reversed string 

let a6 = (function (s){
    a = "";
    for(let char of s)
    a = char + a;
    return a;
})("hello");

console.log(a6);

// Guess the output of closures

// 1. 12
// 2. 12
// 3. 12
// 4. 10
// 5. 12
// 6. 15

// Here we need to understand that var is function scope, is you declare any
// variable with var , in that function it is accessible like any other variable
// as you already know the closure which sticks to the function inside 
// another function.




