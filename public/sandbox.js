"use strict";
let greet;
greet = () => console.log('hello');
// default value :
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(2, 3);
