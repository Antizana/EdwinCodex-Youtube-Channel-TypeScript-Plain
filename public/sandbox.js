"use strict";
let greeting = () => {
    console.log("Hello world");
};
// greeting = "Hello";
let greeting2;
greeting2 = () => {
    console.log("Hello world again");
};
const add = (a, b) => {
    console.log(a + b);
};
add(10, 5);
// add(7, "10");
// add(7, 10, 5);
const add2 = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
add2(7, 10); //prints c as undefined
const add3 = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add3(7, 10);
add3(7, 10, 15);
add3(7, 10, "15");
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 7);
// result = "Subtracting"
const minus2 = (a, b) => {
    return a - b;
};
const add4 = (a, b) => {
    console.log(a + b);
};
