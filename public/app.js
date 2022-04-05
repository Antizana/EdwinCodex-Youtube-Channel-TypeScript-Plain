"use strict";
const button = document.querySelector("button");
console.log(button);
// console.log(button.innerText);
if (button) {
    console.log(button.innerText);
}
console.log(button === null || button === void 0 ? void 0 : button.innerText);
const button2 = document.querySelector("button");
console.log(button2.innerText);
const form = document.querySelector("form");
const form2 = document.querySelector(".new-item-form");
const form3 = document.querySelector(".new-item-form");
console.log(form3.children);
//Inputs 
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.value, amount.valueAsNumber);
});
