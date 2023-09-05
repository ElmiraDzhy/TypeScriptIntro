"use strict";
// function types (signatures)
// let greet: Function;
//exp 1
let greet;
greet = (name, greeting) => {
    console.log(`${greeting} ${name}!`);
};
//exp 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
//exp3
let logDetails;
logDetails = (user) => {
    console.log(`${user.name} is ${user.age} years old`);
};
