"use strict";
let greet;
greet = () => console.log('hello');
// default value :
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(2, 3);
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 7);
// result = 'string' ->> error
